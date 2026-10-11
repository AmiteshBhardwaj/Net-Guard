=====================================================================
 AI NETWORK INTRUSION DETECTION DASHBOARD  -  PROJECT PLAN
 IEEE ComSoc Hackathon, BMSIT   |   Problem Statement: SW-25
 Team: 4 members   |   Software only
=====================================================================

TAGS USED IN THIS FILE
  [MUST]   = must have, do this first
  [NICE]   = nice to have, only after the MUST items work
  [RISKY]  = can waste time or break on demo day, be careful

ASSUMPTIONS
  - Team knows basic Python, basic ML, and basic web (HTML/JS)
  - Laptops run Windows or Linux
  - No time limit is planned here, only the ORDER of work


=====================================================================
 1. ARCHITECTURE (how everything connects)
=====================================================================

   ATTACK SCRIPTS  --->  VICTIM (small local web app)
        (ours)                    |
                                  | network packets
                                  v
   +------------------------------------------------------+
   | TRAFFIC SOURCE (switchable)                          |
   |   LIVE (Scapy)  |  PCAP replay  |  CSV replay        |
   +------------------------------------------------------+
                                  |
                                  v
   +------------------------------------------------------+
   | FLOW BUILDER + FEATURE EXTRACTOR (about 12 features) |
   +------------------------------------------------------+
                                  |
                                  v
   +------------------------------------------------------+
   | DETECTOR = ML model + simple rules + noise filters   |
   +------------------------------------------------------+
                                  |
                                  v
   +------------------------------------------------------+
   | EXPLAINER ("why was this flagged?")                  |
   +------------------------------------------------------+
                                  |
                                  v
   +------------------------------------------------------+
   | BACKEND: FastAPI + WebSocket + SQLite                |
   +------------------------------------------------------+
            |                                  |
            v                                  v
      DASHBOARD (browser)               AUTO-BLOCK (simulated)

SHARED MESSAGE FORMAT (agree on this first, do not change later):

   {
     "ts": 1730000000,
     "src": "10.0.0.5",
     "dst": "10.0.0.2",
     "dport": 22,
     "label": "BruteForce",
     "prob": 0.93,
     "severity": "HIGH",
     "reasons": ["120 login tries in 5 seconds"],
     "blocked": false
   }


=====================================================================
 2. TECH STACK (what to use and why)
=====================================================================

 PART              TOOL                      WHY                    TAG
 ----------------  ------------------------  ---------------------  ------
 Language          Python 3.11               Everyone knows it      [MUST]
 Packet capture    Scapy                     Easy to read packets   [MUST]
 Replay            Saved .pcap + CSV files   Safe backup plan       [MUST]
 Data cleaning     pandas, numpy             Standard for CSV data  [MUST]
 ML model          scikit-learn RandomForest Simple, strong, fast   [MUST]
 Better ML         XGBoost / LightGBM        Slightly higher score  [NICE]
 Explain           Plain-English rule text   Anyone can understand  [MUST]
 Explain (fancy)   SHAP                      Shows top reasons      [NICE]
 Backend           FastAPI + WebSocket       Pushes live updates    [MUST]
 Database          SQLite                    Zero setup, one file   [MUST]
 Frontend          HTML + Tailwind + Chart.js No build tools needed [MUST]
 Map               Leaflet                   Attack map (see sec 7) [NICE]
 Victim app        Flask (tiny login page)   Target for brute force [MUST]
 Lab network       VirtualBox VM OR 2 laptops Safe and isolated     [MUST]
                   on a phone hotspot

 [RISKY] Do NOT use React, Kafka, Docker-compose, Elasticsearch.
         They take a lot of time and judges will not reward them.


=====================================================================
 3. DATASET
=====================================================================

 CHOICE: CICIDS2017                                           [MUST]
   Why: modern attacks (PortScan, DoS, DDoS, Brute Force),
        famous dataset, judges recognise it.

 NOT CHOSEN:
   NSL-KDD   - very old, features can't be made from live packets
   UNSW-NB15 - fine as a backup, but heavier to handle

 THE BIG PROBLEM: dataset features do not match live traffic.
 CICIDS has 78 features made by a Java tool (CICFlowMeter).
 We cannot easily copy that tool.

 HOW TO FIX IT:
   1. Use only about 12 features we can calculate ourselves   [MUST]
        - destination port
        - flow duration
        - forward packets / backward packets
        - forward bytes / backward bytes
        - bytes per second, packets per second
        - average packet size
        - SYN count, ACK count, RST count
   2. Write our own flow builder (group packets by
      source IP, dest IP, ports, protocol) that outputs
      the SAME 12 features                                    [MUST]
   3. Record our own attack + normal traffic in the lab,
      label it, and MIX it into the training data.
      This is the best way to close the gap.                  [MUST]
   4. Test on BOTH: CICIDS test data AND our own lab data.
      Show both numbers honestly.                             [MUST]
   5. Use "distinct ports in last 5 seconds" as an ML
      feature                                                 [NICE]
      (easier: handle this with a simple rule instead)

 DATA CLEANING WARNINGS [RISKY]:
   - Remove "Infinity" and NaN values
   - Benign (normal) rows are huge -> reduce them
   - Use only these days: Monday (normal), Tuesday (brute force),
     Wednesday (DoS), Friday (PortScan, DDoS). Skip the rest.


=====================================================================
 4. ML APPROACH
=====================================================================

 CLASSES TO DETECT: Normal, PortScan, DoS/DDoS, BruteForce    [MUST]

 MODELS (try in this order):
   Decision Tree (baseline) -> Random Forest (final)          [MUST]
   XGBoost (compare)                                          [NICE]
   Isolation Forest (catch unknown attacks)                   [NICE]
     [RISKY] it creates many false alarms

 TRAIN/TEST SPLIT                                             [MUST]
   Split by capture DAY, not by random rows.
   Random split leaks data and gives fake 99% accuracy.

 METRICS TO REPORT                                            [MUST]
   Precision, Recall, F1 (for each attack type),
   confusion matrix, and FALSE ALARM RATE.

 CLASS BALANCE                                                [MUST]
   Use class_weight="balanced" and cut down normal rows.

 HOW TO REDUCE FALSE ALARMS (all are [MUST])
   - Alert only if confidence >= 0.8 (tune this number)
   - Need 3+ suspicious flows from the same IP in 5 seconds
   - One alert per IP + attack type every 10 seconds (cooldown)
   - Whitelist trusted IPs (gateway, DNS, our dashboard)
   - Use rules + ML together. Example rule:
       "one IP touched 50+ different ports in 5 seconds = port scan"


=====================================================================
 5. LIVE TRAFFIC STRATEGY
=====================================================================

 THREE MODES, ONE SWITCH (SOURCE = live | pcap | csv)         [MUST]

   LIVE     Scapy sniff() on the lab network                  [MUST]
   PCAP     Replay a recorded attack session through the
            same pipeline                                     [MUST]
   CSV      Feed saved features at adjustable speed           [MUST]

 KNOWN PROBLEMS [RISKY]
   - Windows: needs Npcap installed and "Run as Administrator".
     Capturing on loopback (127.0.0.1) is hard.
     -> Use a VM or two laptops instead.
   - College Wi-Fi often blocks device-to-device traffic.
     -> Use a phone hotspot or laptop hotspot.
   - If you use replay mode, TELL the judges:
     "This is a recorded attack being replayed."
     Never say it is live when it is not.


=====================================================================
 6. ATTACK SIMULATOR (our own machines ONLY)
=====================================================================

 ATTACKS                                                      [MUST]
   Port scan     Script tries ports 1-1000 on our victim
   Brute force   Script sends many wrong logins to our own
                 Flask login page
   DoS-like      Small, rate-limited burst of requests to our
                 own victim server
   Normal        Script that browses the victim app + pings,
                 so "normal" traffic exists too

 SAFETY RULES (build these INTO the script):                  [MUST]
   [ ] Refuse any target that is not a private IP
       (127.x, 10.x, 172.16-31.x, 192.168.x)
   [ ] Hard limit on speed and on duration
   [ ] Run only in our VM / host-only network / our own laptops
   [ ] NEVER run on college Wi-Fi, the internet, or someone
       else's computer
   [ ] Simulator tells the backend "attack X started / stopped".
       This lets the dashboard show a live "attacks detected
       vs attacks launched" score.


=====================================================================
 7. DASHBOARD DESIGN
=====================================================================

 LAYOUT:

 +-----------------------------------------------------------+
 | NetGuard   [Source: LIVE v]        Threat level: MEDIUM   |
 +----------+----------+----------+----------+---------------+
 | Packets/s| Active   | Alerts   | Blocked  | Detected 3/3  |
 |   842    | flows    |    7     |  2 IPs   | Prec 98%      |
 +----------+----------+----------+----------+---------------+
 | LIVE TRAFFIC (line chart)    | ALERT FEED (newest on top) |
 |  normal vs suspicious        |  HIGH  PortScan  10.0.0.5  |
 |                              |   why: 120 ports in 5 sec  |
 +------------------------------+  MED   BruteForce ...      |
 | ATTACK TYPES (donut chart)   |  [Block IP]                |
 +------------------------------+----------------------------+
 | TIMELINE | WHY FLAGGED (bars) | BUTTONS: [Port scan]      |
 |          |                    | [Brute force] [DoS flood]  |
 +-----------------------------------------------------------+

 FEATURES
   Live line chart + alert feed (WebSocket)                   [MUST]
   Severity colours: LOW / MEDIUM / HIGH / CRITICAL           [MUST]
   KPI cards (packets/s, alerts, blocked IPs)                 [MUST]
   "Launch attack" buttons for judges                         [MUST]
   Plain-English reason on every alert                        [MUST]
   Model scores panel (label it "offline test results")       [MUST]
   Live "attacks detected / attacks launched" score           [MUST]
   Attack timeline                                            [NICE]
   SHAP "why flagged" bar chart                               [NICE]
   Dark theme + red flash on critical alert                   [NICE]
   Attack map                                                 [NICE]
     [RISKY] Local IPs have no real location. If you show a
     map, say clearly it is simulated. Safer option: a
     "Top attackers" table.

 AUTO-BLOCK
   Simulated block: IP goes into a blocklist, its traffic is
   ignored, dashboard shows "BLOCKED"                         [MUST]
   Real firewall rule: ONLY on the victim VM                  [NICE]
     [RISKY] never on your own laptop, you can lock yourself out.


=====================================================================
 8. TASK SPLIT (4 members)
=====================================================================

 P1 - ML LEAD
   Owns: dataset cleaning, training, testing, SHAP,
         false-alarm tuning
   Gives: model.pkl, features.json,
          predict(features) -> label, confidence, reasons     [MUST]

 P2 - PIPELINE LEAD
   Owns: Scapy capture, flow builder, feature extractor,
         PCAP/CSV replay, detector (ML + rules + filters)
   Gives: alert messages in the shared format                 [MUST]

 P3 - FRONTEND
   Owns: dashboard page, charts, alert feed, buttons, theme
   Gets: WebSocket messages (start with a FAKE data feed)     [MUST]

 P4 - BACKEND + DEMO OPS
   Owns: FastAPI, WebSocket, SQLite, blocklist, attack
         simulator, victim app, lab network, slides
   Gives: /launch/{attack}, /block/{ip}, /stats               [MUST]

 EVERYONE: practice the demo and learn the pitch.
 Each person should be able to explain every module.

 AGREE ON THESE FIRST:
   - the shared message format (section 1)
   - the order of the 12 features
   - the API endpoints above


=====================================================================
 9. MILESTONES (phases, no clock)
=====================================================================

 PHASE   GOAL                   DONE WHEN
 -----   ---------------------  ---------------------------------
 M0      Setup                  Repo ready, message format agreed,
                                lab network works
 M1      Build in parallel      P1 model trains, P2 packets become
                                flows, P3 dashboard shows fake data,
                                P4 simulator + API work
 M2      MVP END-TO-END         Fake attack -> detected -> alert
                                shows on dashboard
 M3      Make it solid          False alarms tuned, replay mode
                                works, KPIs are live
 M4      Standout features      SHAP, auto-block, timeline
 M5      Demo prep              Backup PCAP saved, screen recording
                                saved, 5 full rehearsals, slides

 MVP (finish this BEFORE any extras):                         [MUST]
   capture or replay -> 12 features -> Random Forest ->
   alert feed + live chart + launch buttons + plain reasons

 EXTRAS, in this order:                                       [NICE]
   1 SHAP bars
   2 simulated auto-block
   3 severity + timeline
   4 model scores panel
   5 live detection score
   6 map
   7 real firewall block


=====================================================================
 10. DEMO SCRIPT
=====================================================================

 3-MINUTE FLOW
   0:00  Show dashboard, traffic is normal.
         SAY: "This is our network. Green means normal."
   0:30  Start normal browsing.
         SAY: "The AI has learned what healthy traffic looks like."
   0:50  A JUDGE presses [Port scan].
         SAY: "Someone is knocking on every door."
         Alert appears with the reason.
   1:30  Click the alert, show the "why flagged" panel.
         SAY: "It explains itself: 120 ports in 5 seconds."
   1:50  Press [Brute force] or [DoS flood].
         Severity turns HIGH, screen flashes red.
   2:15  Click [Block IP] (or let auto-block fire).
         SAY: "Threat stopped instantly."
   2:30  Point at the score cards: "3 of 3 attacks caught,
         very few false alarms."
   2:50  SAY: "Detect. Explain. Respond. All live."

 30-SECOND VERSION FOR NON-TECHNICAL JUDGES
   "Imagine a security guard watching CCTV of your network who
   never blinks. Our AI learned what normal looks like. When
   someone starts acting like an attacker, it raises an alarm
   on this screen, tells you in plain words why, and can block
   them straight away."


=====================================================================
 11. RISKS AND BACKUPS
=====================================================================

 WHAT CAN BREAK                      BACKUP
 ----------------------------------  ------------------------------
 Live capture fails (driver, admin,  Switch to PCAP replay and tell
 Wi-Fi)                              the judges honestly
 Laptop crashes                      Second laptop with same code +
                                     a screen recording of a good run
 Hotspot / network drops             Local VM-only setup, tested
                                     beforehand
 Too many false alarms live          Raise threshold, add whitelist,
                                     keep a tuned config file ready
 Model misses a demo attack          Rules still catch scan, brute
                                     force and flood
 Judge presses buttons too fast      Cooldown + queue in backend
 Dashboard gets slow                 Update once per second, limit
                                     chart points
 SHAP is slow                        Compute only for alerts, or
                                     use plain-English reasons only
 Judge doubts "99% accuracy"         Show both CICIDS and lab-data
                                     scores, explain the day-split
 Internet down                       Host Chart.js / Tailwind files
                                     locally (no CDN links)


=====================================================================
 12. JUDGING PITCH
=====================================================================

 5 SLIDES
   1. PROBLEM      Attacks are found after the damage is done
   2. SOLUTION     One-line pitch + dashboard screenshot
   3. HOW IT WORKS Simple version of the architecture diagram
   4. RESULTS      Precision, recall, false alarm rate,
                   live "detected vs launched" score
   5. IMPACT       Who can use it + what we will add next

 LIKELY JUDGE QUESTIONS
   Q: Is this real traffic?
   A: Yes, captured live in our lab network. We also have a
      replay mode and we label it clearly when we use it.

   Q: Why is the accuracy so high?
   A: CICIDS is a fairly easy dataset. We split by day to avoid
      cheating, and we also test on our own lab traffic.

   Q: What about false alarms?
   A: Confidence threshold, 3-flow check, cooldown, whitelist,
      and rules + ML together. We show the false alarm rate.

   Q: Can it catch new, unknown attacks?
   A: It catches known types well. Anomaly detection for unknown
      attacks is our future work.

   Q: Why ML and not only rules?
   A: Rules catch obvious attacks. ML catches subtle patterns.
      We use both.

   Q: Is your attack simulator safe and legal?
   A: Yes. Private IPs only, speed-limited, in an isolated lab.

   Q: Can it scale?
   A: The classifier handles each flow separately, so it can be
      moved to bigger tools later (Zeek, Kafka).

   Q: Does auto-block really work?
   A: In the demo it is simulated. Real firewall blocking is on
      our roadmap.

 HOW TO STAND OUT FROM OTHER IDS TEAMS
   - Judges press the attack buttons themselves          [MUST]
   - Every alert explains WHY in plain English           [MUST]
   - Live "attacks detected / launched" score, not just
     one static accuracy number                          [MUST]
   - Honest testing (day-split + our own lab data)       [MUST]
   - Full loop: detect -> explain -> respond             [NICE]

=====================================================================
 END OF PLAN
=====================================================================
