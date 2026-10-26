Worked for 2m 29s

### End-to-End Project Summary: IoT-Based Smart Energy Meter with Cloud Monitoring, Tokenless Recharge and AI-Powered Consumption Analytics

Project: Design and Implementation of an IoT-Based Smart Energy Meter with Cloud Monitoring, Tokenless Recharge and Consumption Analytics (AI-Powered).

Core idea: Transform a conventional electricity meter into an intelligent, internet-connected energy management system that lets consumers monitor usage, understand electricity costs, recharge digitally, and control their power supply remotely.

Based on our previous development discussions and a review of the [project's GitHub repository](https://github.com/King-Austin/Smart_Energy_Meter?utm_source=chatgpt.com), this is more than a hardware metering experiment. It combines embedded systems, electrical measurement, IoT communication, cloud infrastructure, payment workflows, data analytics, AI, and cross-platform software development.

One important distinction for the blog: the project is an engineering prototype, not yet a certified electricity distribution meter. Its most realistic near-term application is as a smart sub-meter for residential buildings, apartments, student hostels, estates, and small commercial facilities.

### 1\. The problem: Why we built it

Electricity consumers in Nigeria face several practical challenges that conventional prepaid meters do not fully address.

* Limited consumption visibility: Many users know how much electricity credit they have purchased, but not precisely which usage patterns are driving their spending.

* Manual recharge friction: Conventional STS prepaid systems commonly require entering a 20-digit recharge token, introducing additional steps and potential errors.

* Unpredictable spending: Without accessible consumption histories or projections, planning monthly electricity expenditure becomes difficult.

* Limited remote management: Meter owners and property managers cannot always inspect usage, detect abnormalities, or control individual supplies remotely.

* Power quality and reliability: Voltage fluctuations, outages, and intermittent internet connectivity complicate smart-energy monitoring and control.

Our project investigates a straightforward engineering question:

What if an electricity meter could do more than measure power — what if it could monitor usage in real time, interpret consumption patterns, manage electricity credit, and communicate directly with a web or mobile application?

That question informed the entire system design.

### 2\. The solution: An intelligent energy-management ecosystem

The system brings together three principal components:

Hardware and edge intelligence

ESP32 microcontroller · energy sensor · relay · local display · protection logic

Wi-Fi / HTTPS telemetry and commands

Cloud backend and data layer

Supabase · PostgreSQL · telemetry history · recharge records · meter state

Realtime synchronization

Web and Android

Dashboard, remote control, wallet and analytics

AI energy advisor

Consumption interpretation, explanations and recommendations

This is fundamentally a bidirectional IoT architecture. The meter transmits measurements to the cloud, while permitted settings and control commands travel in the opposite direction.

That distinction is important: this is not simply a dashboard displaying ESP32 sensor readings. It is an attempt to coordinate physical electrical hardware with remote application state.

### 3\. The technology stack and system architecture

The current codebase uses the following technologies. This reflects the repository as reviewed in October 2026, rather than assuming all earlier development decisions remained unchanged.

| Layer                  | Technology                            | Responsibility                                              |
| ---------------------- | ------------------------------------- | ----------------------------------------------------------- |
| Embedded controller    | ESP32, Arduino C++                    | Sensor acquisition, connectivity, local control             |
| Electrical measurement | PZEM-004T v3.0                        | Voltage, current, power, frequency, energy and power factor |
| Power switching        | Relay module                          | Electrical load connection and disconnection                |
| Local interface        | I2C LCD, LEDs, buzzer                 | Operational feedback and alarms                             |
| Communication          | Wi-Fi, HTTP/HTTPS, JSON               | Device-to-cloud telemetry and commands                      |
| Cloud infrastructure   | Supabase                              | Backend APIs and data synchronization                       |
| Database               | PostgreSQL                            | Meter data, transaction records, telemetry and events       |
| Frontend               | Next.js, React, TypeScript, Tailwind CSS | Monitoring and management interface                       |
| Mobile application     | Capacitor, Android                    | Mobile delivery of the web application                      |
| Payment workflow       | Paystack integration/test mode        | Digital electricity recharge workflow                       |
| AI layer               | Groq, Gemini and rule-based fallbacks | Conversational energy insights                              |

The demonstrated application was built with Next.js. That is the frontend framework the article should name consistently.

The Proteus circuit image is a simulation artefact used during design and validation. It should not be presented as the exact schematic of the assembled prototype. The physical prototype photograph remains the primary evidence of the hardware that was built.

### How the entire system operates

* Electrical measurement

    The PZEM sensor measures the electrical characteristics of a connected AC load. The ESP32 acquires those readings over UART and calculates or maintains the relevant energy information.

* Embedded processing

    The ESP32 runs firmware responsible for device state, relay actuation, local energy-balance accounting, tamper monitoring, and communication. The firmware includes logic to enforce certain protection conditions without waiting for cloud commands.

* Cloud ingestion

    Approximately every two seconds, the firmware attempts to send telemetry through a Supabase API endpoint. Cloud-side data structures maintain meter status and historical readings.

* Storage and synchronization

    PostgreSQL stores live state, historical telemetry, prepaid transactions, outage events and tamper records. Supabase Realtime subscriptions and application-side polling allow the dashboard to receive updates.

* User interaction

    Consumers can view electrical measurements, examine consumption trends, check prepaid balances and request permitted power-control operations through the web or Android interface.

* Recharge and remote control

    The tokenless workflow converts a validated monetary recharge into kWh according to the applicable tariff. The updated balance is synchronized to the meter. Remote relay commands must also be received and acknowledged by the physical device.

* AI-assisted interpretation

    The application provides an AI energy advisor that can interpret meter data, explain possible consumption issues, and provide practical energy-management suggestions.

The important architectural choice is that metering and safety-critical decisions should remain functional at the edge, even when the cloud connection fails.

### 4\. Key features and their technical value

Live consumption monitoring

Presents power, voltage, current and energy usage in a form consumers can understand. Historical readings help identify consumption patterns instead of relying solely on remaining prepaid units.

Tokenless electricity recharge

Demonstrates a workflow in which a user funds a meter account and receives energy credit without manually entering STS tokens. The current code includes Paystack test-mode and simulated checkout paths; production payment verification is not yet established.

Remote power control and protection

The relay subsystem supports remote switching and programmed protective cutoffs. A useful demonstration is showing a dashboard command propagate to the ESP32 and physically change the connected bulb's supply state.

Offline resilience

Local accounting is designed to continue during connectivity loss. The firmware also implements a 64-record RAM buffer for pending telemetry uploads, although this is not a substitute for long-duration persistent offline logging.

AI-powered energy assistance

The AI interface can explain consumption information conversationally and surface recommendations. This is better described as an AI-assisted interpretation layer than as a fully validated predictive machine-learning system.

### 5\. The engineering challenges — the strongest part of the blog

This is where the article can become more valuable than a typical project showcase. The challenges illustrate how integrating hardware with software introduces failure modes that do not appear when building either component independently.

| Challenge                         | Engineering lesson                                                                                                                                                      |
| --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Sensor selection and calibration  | Accurate energy monitoring requires compatible sensing hardware, correct measurement units and calibration against a trustworthy reference.                             |
| ESP32-to-cloud communication      | A working Wi-Fi connection does not guarantee successful telemetry ingestion. HTTP responses, API contracts and backend functions must all align.                       |
| Cloud-to-relay synchronization    | Changing a value on a dashboard is different from successfully actuating a physical relay. Hardware acknowledgement is necessary.                                       |
| Intermittent network connectivity | Energy balance and protection logic cannot depend entirely on continuous internet access.                                                                               |
| Power and electrical isolation    | Working with mains AC introduces isolation, grounding, overcurrent protection, thermal and enclosure-safety requirements that ordinary software prototypes do not face. |
| Frontend and database consistency | Charts and balances need dependable data sources, clear timestamps, correct energy units and synchronization between devices.                                           |
| Billing integrity                 | Recharge credit must only be issued after verified payment and recorded using atomic, idempotent database operations.                                                   |

### A particularly useful real-world debugging story

The repository contains a [relay actuation investigation](https://github.com/King-Austin/Smart_Energy_Meter/blob/main/relay-actuation-investigation.md?utm_source=chatgpt.com) that identifies two specific integration failures:

First, multiple overloaded PostgreSQL `record_telemetry` functions caused a PostgREST `PGRST203` ambiguity error, preventing the ESP32's requests from completing successfully.

Second, the device had been using a hardcoded overvoltage threshold, meaning a user-adjusted cutoff value in the dashboard did not automatically become the threshold enforced by the physical controller.

That gives you a strong technical lesson to share:

> One of the most important things we learned was that displaying a new device state in the dashboard does not mean the hardware has successfully executed it. True IoT integration requires reliable commands, device acknowledgements, and a clear source of truth.

The current firmware includes dynamic threshold synchronization, but the investigation's verification checklist does not by itself prove that every field test passed.

You can use this experience to explain why hardware-software integration often becomes the most complex stage of an IoT project, even after the separate components appear functional.

### 6\. The impact: Why the project matters beyond graduation

Households

Better visibility into electricity expenditure, reduced recharge friction, and earlier awareness of unusual consumption.

Hostels, estates and rental apartments

Potentially useful for individual unit sub-metering, shared-building energy accounting, facility management and tenant usage transparency.

Businesses

Historical consumption data can support better budgeting, monitoring of equipment usage, and identification of unnecessary energy expenditure.

Energy-sector innovation

Demonstrates the integration of low-cost embedded hardware with cloud services, digital billing and analytics, potentially informing future smart sub-metering systems.

These are realistic applications and potential benefits, not yet measured social or economic outcomes.

A strong impact statement would be:

The objective is not simply to measure how much electricity consumers use. It is to make energy consumption more transparent, accessible and manageable through real-time data and connected software.

### 7\. What still needs work before commercial deployment

Your blog will be much stronger if you separate the functioning academic prototype from the additional requirements of a production system.

There are several important gaps visible in the current repository:

* Payment integrity: The application includes simulated checkout paths and browser-triggered credits. A deployed billing system would need server-side Paystack verification, secure webhooks, transaction deduplication and auditable balance updates.

The supplied interface screenshots contain promotional wording such as “100% bill transparency,” “up to 25%” savings, “sub-second” tracking and “instant” protection. Those statements should not appear in the published article unless controlled tests produce supporting measurements. Use neutral interface crops or updated screenshots instead.

* Security: The repository contains hardcoded Wi-Fi credentials, a demonstration administrator PIN and firmware that disables TLS certificate verification. Credentials should be rotated, secrets removed from public source, proper certificate verification enabled, and backend authorization hardened.

* Relay configuration: Some firmware comments and configuration values disagree about the relay's active level. Physical validation and fail-safe testing are essential before controlling larger loads.

* Offline durability: The 64-record RAM queue retains only about 128 seconds of measurements at two-second sampling before older records are overwritten. It is also volatile during complete power loss.

* Commercial metering requirements: Measurement accuracy, component ratings, electrical safety, tamper resistance, revenue protection, long-term reliability and applicable Nigerian regulatory approval would all require formal evaluation.

There is also a documentation discrepancy worth resolving. The latest README advertises more advanced concepts such as dual-current-transformer anti-bypass detection, a 40A magnetic latching contactor and STS token generation. The embedded firmware and thesis documentation, however, describe an ESP32-WROOM-based 30A relay system with tokenless recharge.

For the article, document the specific hardware revision you actually assembled and tested, not every feature described in the evolving repository.

### 8\. Turn this into an actionable engineering blog

I recommend a technical case-study format rather than a generic announcement.

SUGGESTED BLOG HEADLINE

Beyond the Prepaid Meter: How We Built an IoT Smart Energy Meter with Cloud Monitoring, Digital Recharge and AI Analytics

An alternative for a more developer-oriented audience:

From ESP32 to the Cloud: Engineering a Full-Stack Smart Electricity Meter

### Suggested article structure

| Section                    | What to communicate                                         | Evidence to include                                           |
| -------------------------- | ----------------------------------------------------------- | ------------------------------------------------------------- |
| 1. The motivation          | Why existing metering workflows inspired the project        | The problem and user scenario                                 |
| 2. System design           | Explain the hardware, cloud and application architecture    | End-to-end architecture diagram                               |
| 3. Hardware development    | Sensors, controller, power switching and packaging          | Prototype photograph and clearly labelled Proteus simulation  |
| 4. Full-stack development  | ESP32 telemetry, Supabase, PostgreSQL, React and Capacitor  | Dashboard and database screenshots                            |
| 5. Digital recharge and AI | How recharge accounting and the AI assistant operate        | A recharge demo and AI interaction                            |
| 6. What went wrong         | Actual integration challenges and debugging decisions       | Serial logs, failed API responses and fixes                   |
| 7. Results and lessons     | What the prototype demonstrated and what remains unverified | Test observations and measured results                         |
| 8. The bigger picture      | Sub-metering applications and commercial limitations        | Roadmap and call for technical feedback                       |

### Demonstrations that will make the blog actionable

For the strongest technical article, document five concrete demonstrations. Video can be added later, but it is not required for the first publication:

Blog evidence checklist

0/5 captured

Connect a small test load and compare live power readings with a reference instrument.

Show the ESP32 sending telemetry to Supabase and the dashboard updating.

Change a relay control setting and show the physical load respond, including device acknowledgement.

Disconnect Wi-Fi, observe local operation, then reconnect and inspect recovered telemetry.

Run a test recharge and demonstrate the corresponding balance update, clearly labeling it as test mode.

These demonstrations should use controlled, electrically safe test conditions.

If you have experimental data, include actual measurements such as sensor error percentage, end-to-end telemetry latency, remote relay actuation delay and the amount of telemetry recovered after reconnecting. Avoid using simulated values or unverified performance claims as measured results.

### 9\. The central message of the article

The strongest narrative is not that you built a meter with many features.

It is that you took a physical engineering problem and approached it as a complete connected system, crossing several technical disciplines:

Embedded C++Electrical instrumentationIoT networkingBackend engineeringPostgreSQLFrontend developmentAndroid integrationPayment systemsAI integration

A reader should finish the article understanding not just what the system does, but how you designed it, where integration failed, how those failures informed the architecture, and what engineering work is needed to make it deployable.

My recommendation: Make the article roughly 60% engineering implementation and challenges, 25% problem and impact, and 15% lessons and future development. That positioning will be more valuable to developers, electronics engineers, IoT enthusiasts, researchers and potential industry collaborators than a feature-heavy promotional post.

--------------------When final-year projects were allocated in my department, there were several interesting directions.

Drones.

Smart inverters.

Solar systems.

AgriTech.

HealthTech.

Automation.

But the broad area given to my supervisor and me was:

**Energy.**

Energy generation.

Energy distribution.

Energy utilization.

And that sounded simple until I sat down and asked myself:

**“What exactly should I build?”**

Not just:

**“What can I demonstrate during project defense?”**

But:

**“What can I build that could actually leave the laboratory someday?”**

---

My first thoughts went toward the bigger problems.

**Smart Grid?**

Very interesting.

But then…

**“How do I deploy that without changing a significant part of the existing grid infrastructure?”**

That would require serious utility involvement, infrastructure changes and massive investment.

Good research.

Good prototype.

But potentially difficult to move beyond demonstration.

So I kept brainstorming.

**Renewable-energy management?**

Possible.

**Distribution automation?**

Interesting.

**Grid fault monitoring?**

Useful.

But the same question kept coming back:

**“How independently can this actually be deployed?”**

Eventually I started looking at something much closer to the consumer.

**The electricity meter.**

Then the questions changed.

What if a consumer could see exactly what was happening with their electricity?

What if energy consumption wasn't simply a number that appeared at the end of the month?

What if they could see:

“How much energy did I consume yesterday?”

“What is my current power usage?”

“How quickly am I consuming my balance?”

“What voltage is entering my home?”

“What happened while I was away?”

And then I looked at the other side.

**What about the electricity distributor?**

What if they could see meter status remotely?

What if they could see where meters were going offline?

What if several meters within the same area suddenly disappeared from the network?

Could that information help identify an outage without waiting for consumers to start making calls?

That was when the project stopped looking like just another digital meter.

It started looking like an **energy information system.**

---

So the idea became:

**Design and Implementation of an IoT-Based Smart Energy Meter with Cloud Monitoring, Tokenless Recharge, Consumption Analytics and AI-Powered Insights.**

Then came the next question.

**“Fine. How do we build it?”**

Hardware first.

We needed the meter to measure actual electrical parameters.

Voltage.

Current.

Power.

Energy.

Initially, we experimented with separate analogue voltage and current sensors.

And that brought its own adventure. 😅

Calibration.

Noise.

Accuracy.

Signal conditioning.

More calibration.

More testing.

At one point I had to ask myself:

**“Are we building the smart meter or are we building an entire measurement laboratory?”**

That was when the **PZEM energy-monitoring module** became one of the most important changes in the project.

It gave us the electrical measurements we needed reliably enough for the prototype, while allowing us to focus on the intelligence surrounding the meter.

The ESP32 became the controller.

The relay became the load-control interface.

The PZEM handled the energy measurements.

And then the real software engineering began.

---

**“Where should all this data go?”**

Every meter needed to continuously send telemetry somewhere.

Not only that.

We needed to know:

**Which customer does this reading belong to?**

So every physical meter was tied to a unique **Meter ID**.

Every telemetry packet carried that identity.

That meant the cloud could associate:

Meter → User → Consumption → Wallet → Analytics → Settings.

Now we needed infrastructure.

My first instinct?

**VPS.**

A VPS gives you control.

So we experimented with that direction.

But then came configuration complexity, infrastructure management and considerations around latency and scaling.

Next thought:

**AWS?**

Powerful.

Extremely powerful.

But for an undergraduate project trying to move quickly from prototype to demonstration, the amount of setup started becoming another project on its own.

Then I found myself asking:

**“Do we really need to build every piece of cloud infrastructure ourselves?”**

Enter **Supabase.**

PostgreSQL database.

Authentication.

Edge Functions.

Scheduled jobs.

APIs.

Realtime-capable infrastructure.

Most of what we needed was already available within one ecosystem.

That changed the architecture significantly.

Now the ESP32 could send meter telemetry through HTTP to our cloud services.

The cloud stores it.

The user account is associated with a meter.

And the frontend simply asks:

**“Give me the data for this particular meter.”**

One prototype.

One meter.

One consumer.

But an architecture designed with the idea that another meter could be added later…

and another…

and another.

---

Then came the frontend.

I already had a strong software-development background, so I asked:

**“Why should the user interface look like an engineering test page?”**

If this was supposed to demonstrate a deployable system, the software should feel like an actual product.

So I built the dashboard with **Next.js.**

But then another question came:

**“What about mobile?”**

Building a completely separate application would mean maintaining two frontend codebases.

Web.

Mobile.

Two systems.

So instead, the existing application was packaged for mobile using **Capacitor**.

Now the same platform could exist as:

A web dashboard.

And a mobile application.

One backend.

One user account.

One meter.

The same energy data.

---

Then I thought:

**“Monitoring energy is useful. But what if the meter could actually manage the customer's energy account too?”**

That led to the wallet system.

We prototyped a recharge flow using **Paystack test mode**.

A user could walk through a realistic test payment flow.

After the test transaction was confirmed, the prototype credited the wallet.

Then their energy consumption could continuously deduct from that balance according to the tariff configured within the system.

No physical recharge token needed.

No manually entering long token numbers.

The meter simply knows:

**This customer has this balance.**

And as energy is consumed…

the value decreases.

For our demonstration, we configured the tariff being used for the environment we were modelling so that the system behaved like a realistic prepaid energy platform.

Then another question:

**“What happens when the balance gets exhausted?”**

That is where the relay becomes more than just something that turns a bulb on and off.

It becomes part of the energy-control system.

---

Then we added something I found particularly interesting:

**Voltage protection.**

What if the customer does not want the load connected when the incoming voltage becomes unsafe?

So the user can define acceptable voltage limits.

Too low?

Disconnect.

Too high?

Disconnect.

Voltage returns to the acceptable range?

The system can respond accordingly.

And now the meter isn't just measuring electricity.

It is starting to **protect the load connected to it.**

---

Then came analytics.

Because collecting thousands of telemetry records is useless if nobody can understand them.

So the application started translating those readings into something useful.

Consumption history.

Energy trends.

Current usage.

Previous usage.

Wallet information.

Meter status.

But then I thought:

**“Do we really expect every consumer to understand charts and navigate five different pages just to answer one question?”**

Probably not.

And that led to the **AI Energy Advisor.**

Instead of navigating around the application, imagine asking:

**“How much energy did I use yesterday?”**

**“What was my highest consumption period?”**

**“What minimum voltage did I configure?”**

**“How long will my current balance last if I continue consuming at this rate?”**

And getting a human-readable answer.

But I didn't want to build an AI chatbot that simply received a huge block of context and guessed from it.

So another question came:

**“Why can't the AI retrieve exactly what it needs?”**

That led to the implementation of an **MCP server**.

The AI could use defined tools to query the relevant consumer information from the backend instead of relying entirely on information manually pushed into its prompt.

Meter data.

Settings.

Consumption records.

Wallet information.

Relevant analytics.

The goal was simple:

**Retrieve the required data first. Then explain it.**

Rather than:

**Guess first and hope the answer is correct.**

There are still much more sophisticated ways this AI layer could evolve.

LangChain or similar orchestration frameworks could become useful in a larger version.

Forecasting models could estimate future consumption.

The system could detect unusual usage.

It could identify abnormal overnight consumption.

It could warn:

**“Your consumption today is significantly higher than your normal pattern.”**

Or perhaps:

**“At your current consumption rate, your wallet may be exhausted within approximately X days.”**

That is where I believe the AI side becomes much more interesting.

---

Then I started thinking from the electricity distributor's perspective again.

Imagine hundreds or thousands of meters deployed.

Every meter has a location associated with it.

Then suddenly…

Twenty meters within the same area stop communicating.

Another nearby cluster remains online.

Now the question becomes:

**“Could the meter network itself help identify outages?”**

Potentially, yes.

Instead of immediately sending personnel to patrol an entire area looking for the source of a problem, the platform could help indicate:

Which meters went offline.

When they went offline.

Which geographical cluster is affected.

Whether the failure appears isolated or area-wide.

That information could potentially help narrow down where investigation should begin.

So we included location information within the platform architecture as well.

And suddenly the project had moved from:

**“A consumer can check their electricity usage.”**

to:

**“A distributed network of meters could potentially provide operational visibility into parts of the distribution network.”**

---

Then came a very Nigerian question. 😅

**“All of this sounds great… but what happens when there is no internet?”**

For the prototype, communication is Wi-Fi based.

Obviously, expecting every deployed meter to permanently depend on a customer's home Wi-Fi is not the ideal long-term architecture.

So we designed the device with another principle:

**The meter should not stop being a meter simply because the internet disappeared.**

If cloud connectivity is lost, the ESP32 can continue measuring locally.

Consumption continues.

Relevant data can be stored locally.

The meter continues operating based on the last synchronized configuration.

Then when connectivity returns:

**Sync upward.**

Upload the telemetry recorded while offline.

And:

**Sync downward.**

Retrieve relevant settings or changes that were made in the cloud while the device was disconnected.

Cloud connection becomes an enhancement to the meter.

Not the thing keeping the meter alive.

---

Then came another thought:

**“Why should future versions depend on Wi-Fi at all?”**

A more mature deployment could explore:

GSM/LTE communication.

NB-IoT.

LoRa/LoRaWAN.

RF mesh networking.

Or even a hybrid architecture.

Imagine meters within an area communicating with each other.

Data hopping from meter to meter.

Eventually reaching a local gateway.

Then only the gateway needs a stronger internet connection to send aggregated telemetry to the cloud.

One neighbourhood.

One gateway.

Many meters.

That could significantly change the economics and reliability of connectivity.

---

And at this point I looked back at what we had created.

It started as:

**“I need a final-year project in the energy sector.”**

It became:

Hardware metering.

ESP32 firmware.

Cloud infrastructure.

HTTP telemetry.

Database architecture.

User authentication.

Web dashboard.

Mobile application.

Digital wallet.

Paystack payments.

Automated energy billing.

Relay-based load control.

Voltage protection.

Consumption analytics.

AI Energy Advisor.

MCP integration.

Offline telemetry storage.

Cloud synchronization.

Location-aware meter information.

And potentially…

Outage intelligence.

All demonstrated from one working prototype.

We tested it using simple loads such as a **9 W bulb and a laptop charger**, watching the electrical measurements move from the physical hardware…

to the ESP32…

to the cloud…

to the dashboard…

and eventually into something the user could actually understand.

And that became one of my biggest lessons from the project.

Engineering isn't always:

**“How complicated can I make this?”**

Sometimes it is:

**“How many barriers can I remove between an idea and the person who actually needs it?”**

There is still a lot that could be improved.

A production version would require deeper work around electrical protection, metering accuracy, certification, cybersecurity, communication redundancy, tamper detection, firmware updates, hardware reliability and regulatory approval.

But for me, that is exactly what makes the project exciting.

Because the prototype answered the first question:

**“Can we build it?”**

The next question is much bigger:

**“How far can we take it?”**

And that is a conversation I would genuinely like to continue.

More on the hardware, architecture, AI integration, failures, testing and lessons from the project in my next posts.

#ElectricalEngineering #EnergyTech #IoT #SmartMeter #ESP32 #EmbeddedSystems #NextJS #Supabase #ArtificialIntelligence #MCP #CloudComputing #EnergyManagement #FinalYearProject
