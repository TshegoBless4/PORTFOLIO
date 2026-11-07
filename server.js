// ============================================
// server.js
// ============================================
const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.static("public"));

// ============================================
// PASSWORD & CONTENT CONFIGURATION
// ============================================
const CORRECT_PASSWORD = "5300";

const caseStudies = {
  project1: {
    content: `
      <div class="case-study">
        <h2>ABSA NextGen Wealth Studio – First Five Years</h2>
        <div class="case-meta">UI/UX Designer & Web Developer | Apr 2026 - Current</div>
        
        <h3>The Challenge</h3>
        <p>Young, high-earning professionals in South Africa earn R30,000-R70,000 per month but feel overwhelmed by financial choices. They lack clear, personalised guidance on whether to rent or buy, save or invest, prioritise cars or property and have no way to visualise how today's decisions will shape their next 5 years.</p>
        <p>Banking apps show them their balances, not possibilities or potential. They receive no guidance on what a "good" financial life looks like for someone their age, in their city, with their aspirations. They watch friends make different choices — some buying property, others travelling, a few seemingly getting ahead — and wonder if they're making mistakes that will financially set them back.</p>
        
        <h3>Product Goals</h3>
        <ol>
          <li>Create a personalised Money Snapshot that helps users intuitively understand their financial position and track progress toward their goals (rent vs buy, car vs invest, local vs offshore).</li>
          <li>Empower users to make confident financial decisions by visualising the 3-5 year outcomes of different choices through interactive simulations.</li>
          <li>Educate users on South African-specific financial concepts through embedded, contextual learning content.</li>
          <li>Build long-term ABSA loyalty by positioning the bank as a trusted partner during users' critical first five years of wealth-building.</li>
          <li>Drive sustainable engagement through timely nudges and milestone celebrations that keep users coming back.</li>
        </ol>
        
        <h3>User Personas</h3>
        
        <h4>Persona 1 - "The Ambitious Analyst"</h4>
        <p><strong>Age:</strong> 27</p>
        <p><strong>Occupation:</strong> Management Consultant at McKinsey</p>
        <p><strong>Salary:</strong> R65,000/month gross</p>
        <p><strong>Debt Situation:</strong> Thabo carries R120,000 in student debt remaining from his family (interest-free), alongside R8,500/month in vehicle finance for his BMW 1 Series, and typically pays off his R15,000 monthly credit card balance in full.</p>
        <p><strong>Lifestyle Aspirations:</strong> He aims to own a two-bedroom apartment in Sandton by age 30, drive a luxury vehicle, take two international holidays annually, and begin building a side investment portfolio.</p>
        <p><strong>Typical Financial Mistakes:</strong> Despite his high income, Thabo spends nearly 30% of his net income on vehicle costs and has no emergency fund. He invests sporadically without a clear strategy, and consistently underestimates how much tax reduces his take-home pay.</p>
        
        <h4>Persona 2 - "The Cautious Professional"</h4>
        <p><strong>Age:</strong> 31</p>
        <p><strong>Occupation:</strong> Engineer</p>
        <p><strong>Salary:</strong> R48,000/month gross</p>
        <p><strong>Debt Situation:</strong> Lisa recently took on a R1.2 million home loan for a property she rents out to tenants, pays R5,500/month for comprehensive medical aid, and drives a 2015 Toyota Corolla that she owns outright.</p>
        <p><strong>Lifestyle Aspirations:</strong> She hopes to move into her own property within two years, start a family, build a comfortable retirement plan, and take one European holiday before turning 35.</p>
        <p><strong>Typical Financial Mistakes:</strong> Lisa has over-invested in property at the expense of liquid savings, holds no offshore exposure despite her long investment horizon, consistently underestimates ongoing maintenance costs, and takes an overly conservative approach to investing that may limit her long-term growth.</p>
        
        <h3>User Flow</h3>
        <div class="media-container horizontal-media">
          <img src="/images/UserFlow.png" alt="User Flow Diagram">
        </div>
        
        <h3>Sitemap</h3>
        <div class="media-container horizontal-media">
          <img src="/images/Sitemappng.png" alt="Sitemap">
        </div>
        
        <h3>Wireframes (Mid-Fidelity)</h3>
        
        <div class="wireframe-section">
          
          <!-- Money Snapshot -->
          <div class="wireframe-subsection">
            <h4>Money Snapshot</h4>
            <div class="wireframe-description">
              <p><strong>Dashboard Grid</strong> – Money Snapshot uses a flexible card grid that reflows based on screen size.</p>
              <p><strong>Sticky Headers</strong> – Section headers remain visible during scroll for orientation.</p>
              <p><strong>Floating Action Button</strong> – "Learn more" or "Send" prominently positioned.</p>
            </div>
            <div class="wireframe-image vertical-grid">
              <div class="media-container vertical-media">
                <img src="/images/HOME.png" alt="Money Snapshot Dashboard Wireframe">
              </div>
            </div>
          </div>
          
          <!-- Strategy Tracks Overview -->
          <div class="wireframe-subsection">
            <h4>Strategy Tracks Overview</h4>
            <div class="wireframe-description">
              <p><strong>Track Selection</strong> – Users can choose between different financial strategy paths based on their goals.</p>
              <p><strong>Progress Indicators</strong> – Clear visual feedback on where users are in their journey.</p>
            </div>
            <div class="wireframe-image vertical-grid">
              <div class="media-container vertical-media">
                <img src="/images/StrategyTrack.png" alt="Strategy Tracks Overview Wireframe">
              </div>
            </div>
          </div>

          <!-- First Property Path -->
          <div class="wireframe-subsection">
            <h4>First Property Path (Individual Track View)</h4>
            <div class="wireframe-description">
              <p><strong>Card-based Navigation</strong> – Strategy Tracks use cards for scannable, comparable options.</p>
            </div>
            <div class="wireframe-image vertical-grid">
              <div class="media-container vertical-media">
                <img src="/images/StrategyTrackProperty.png" alt="Strategy Tracks Property Overview Wireframe">
              </div>
            </div>
          </div>

          <!-- Simulation Lab Overview -->
          <div class="wireframe-subsection">
            <h4>Simulation Lab Overview</h4>
            <div class="wireframe-image vertical-grid">
              <div class="media-container vertical-media">
                <img src="/images/Simulation.png" alt="Simulation Lab Wireframe">
              </div>
            </div>
          </div>

          <!-- Simulation Lab > Property vs Renting -->
          <div class="wireframe-subsection">
            <h4>Simulation Lab > Property vs Renting (Individual Studio view)</h4>
            <div class="wireframe-description">
              <p><strong>Left Rail/Right Rail:</strong> – Studios use left rail for inputs, right/main for results which is familiar calculator pattern.</p>
            </div>
            <div class="wireframe-image vertical-grid">
              <div class="media-container vertical-media">
                <img src="/images/PropertyVsRenting.png" alt="Simulation Lab > Property vs Renting (Individual Studio view) Wireframe">
              </div>
            </div>
          </div>

          <!-- Simulation Lab > Library -->
          <div class="wireframe-subsection">
            <h4>Simulation Lab > Library</h4>
            <div class="wireframe-image vertical-grid">
              <div class="media-container vertical-media">
                <img src="/images/Library.png" alt="Simulation Lab > Library Wireframe">
              </div>
            </div>
          </div>

        </div> <!-- Close wireframe-section -->

        <h3>Prototype</h3>
        <p><a href="https://tshegobless4.github.io/ABSA-Next-Gen/" target="_blank" rel="noopener noreferrer" class="external-link">View ABSA Next Gen Prototype &rarr;</a></p>
        
      </div>
    `,
  },
  project2: {
    content: `
      <div class="case-study">
        <h2>Personal Portfolio</h2>
        <div class="case-meta">UX/UI Designer & Web Developer | March 2025 - Jun 2025</div>
        
        <h3>Goal Alignment</h3>
        <p>The goal for this website is to curate a space that reflects who I am as a digital artist and designer inspired by the digital world. The theme I am aiming for is a tech-forward, and futuristic aesthetic that offers a sleek and appealing look. This website highlights my design process and is intended for potential collaborators or those interested in engaging with my work in a clean, tech-forward space. I want users to find my website to be easy to navigate through, without feeling overwhelmed.</p>
        
        <h3>My Process</h3>
        <h2>Visual Aesthetic</h2>
        <p>This website should present a clean, modern and tech-forward aesthetic with subtle sci-fi elements. The use of my colours is to provide a sleek yet futuristic vibe. Visually, it should have clean lines, subtle gradients or glows, and space to breathe. Think: sleek, cyber-cool, and modern. The futuristic feel of the website is intentional as it positions my portfolio within the evolving space of digital arts and UI/UX design, which today are inherently forward looking fields.</p>

        <h4>Colour Palette</h4>
        <p>I chose a palette that aligns with the sci-fi theme, using a dark background with light, glowing accents to create a holographic effect. These contrasting tones enhance readability while highlighting key elements like titles. The design choice is inspired by futuristic visuals often seen in sci-fi movies. I also used glow elements to give the website a modern, high-tech feel that not only adds a sense of immersion. Using light accents on a darker parts enhances visual clarity.</p>
        <div class="media-container horizontal-media">
          <img src="/images/ColourPallette.png" alt="Colour Palette">
        </div>

        <h4>Fonts</h4>
        <p>For a sleek, futuristic look, I’m using Orbitron font for all headings and navigation bar and Chakra Petch for body text. Initially in my website i had chosen Orbitron font to use site-wide but it wasn't user friendly and it hurt the eyes of users in longer body text. Orbitron, a geometric sans-serif typeface designed specifically for display purposes, reinforces the sci-fi and the digital theme I was aiming for. Its clean, tech-inspired letterforms pair well with the UI elements on my site such as in the titles and section headers. Since Orbitron is designed as a font display, to maintain readability I limited its use to headings to avoid compromising readability.</p>
        <div class="media-container horizontal-media">
          <img src="/images/OrbitronFontImage.png" alt="Fonts">
        </div>

        <p>To support user-friendly view for the site and to maintain the tech-theme I was aiming for, I used Chakra Petch as the body font. This font maintains a futuristic tone while offering better readability at smaller sizes. It also compliments Orbitron's sharp, modern style but suitable for body text. To enhance readability and to reduce eye strain I adjusted the font size and line space. The pairing of the two fonts create a balanced typographic hierarchy.</p>
        <div class="media-container horizontal-media">
          <img src="/images/ChakraPetchFont.png" alt="Fonts">
        </div>

        <h3>Information Structure</h3>
        <p>The initial Information Structure of the website</p>
        <div class="media-container horizontal-media">
          <img src="/images/InformationStructureDiagram.png" alt="Information Structure Diagram">
        </div>

         <h3>User Flow</h3>
         <p>This is the basic user flow of this website</p>
         <div class="media-container horizontal-media">
           <img src="/images/updated_website_structure.png" alt="updated website structure">
         </div>

         <h3>Wireframes</h3>
        <h4>Homepage (Mobile)</h4>
        <p>The top of the page includes a navigation bar for easy access to different sections. Below it is a welcome text and a brief intro about me, followed by a photo. Contact details will be placed at the footer or near the bottom of the main section.</p>
        <div class="media-container vertical-media">
          <img src="/images/HomepageMobileWireframe.png" alt="Homepage Mobile Wireframe">
        </div>

        <h4>Homepage (Desktop)</h4>
        <div class="media-container horizontal-media">
          <img src="/images/HomepageUpdatedWireframe.png" alt="Homepage Desktop Wireframe">
        </div>

        <h4>Blog Post (Mobile)</h4>
        <p>This wireframe represents the layout for the blog page. It includes space for post previews, images, and filters or categories to explore blog topics.</p>
        <div class="media-container vertical-media">
          <img src="/images/BlogPageWireframe(Mobile).png" alt="BlogPage Wireframe(Mobile) wireframe">
        </div>

        <h4>Blog Post (Desktop)</h4>
        <div class="media-container horizontal-media">
          <img src="/images/UpdatedBlogPage(desktop).png" alt="UpdatedBlogPage(desktop) wireframe">
        </div>

        <h4>Portfolio Page</h4>
        <p>This page will showcase both artwork and games, using images to represent each category.</p>
        <div class="media-container vertical-media">
          <img src="/images/PortfolioPageWireframe(Mobile).png" alt="PortfolioPageWireframe(Mobile) wireframe">
        </div>

        <h4>Essay</h4>
        <p>This page will showcase both artwork and games, using images to represent each category.</p>
        <div class="media-container vertical-media">
          <img src="/images/EssayPageWireframe(Mobile).png" alt="EssayPageWireframe(Mobile) wireframe">
        </div>
        
        <h3>Iterations</h3>
        <h4>Information Structure</h4>
        <p>After iterations, this was the final information structure</p>
        <div class="media-container horizontal-media">
          <img src="/images/InformatedStructureUpdated.png" alt="Information Structure Diagram">
        </div>

        <h4>User Flow</h4>
        <div class="media-container horizontal-media">
          <img src="/images/BasicFlowDiagramUpdated.png" alt="User Flow">
        </div>

        <h3>Prototype</h3>
        <p><a href="https://tshegobless4.github.io/DIGA3008A--Interactive-Media-/index.html" target="_blank" rel="noopener noreferrer" class="external-link">View Personal Portfolio Prototype &rarr;</a></p>
        
      </div>
    `,
  },
  project3: {
    content: `
      <div class="case-study">
        <h2> VibeCheck — Music Discovery App </h2>
        <div class="case-meta">UX/UI Designer | Aug 2025 - Oct 2025</div>
        
         <h3>The Challenge</h3>
        <p>The primary challenge was breaking users free from algorithmic echo chambers. Existing streaming platforms keep users trapped in repetitive recommendation loops, making it difficult to discover new and diverse music.</p>
        <p>Another significant challenge was reducing friction in the music discovery workflow. Users often hear snippets of songs on social media or in cafes but struggle to save them for later. The process typically involves remembering the song name, opening a separate music app, searching manually, and then adding to a playlist. A multi-step process that leads to forgotten songs and abandoned discoveries.</p>
        
        <h3>Product Goals</h3>
        <ol>
          <li>Empower Music Discovery by allowing users to break free from algorithmic loops on streaming apps and give users direct control over their music discovery journey.</li>
          <li>Let users preview songs directly on the website without switching apps.</li>
          <li>Allow users to explore music by genre when they don't have a specific artist in mind.</li>
          <li>Seamless Artist Information including displaying top tracks, follower counts, and genre information, Provide clean, modern interface for viewing artist details.</li>
        </ol>
        
        <h3>User Personas</h3>
        
        <h4>Persona 1 - Alex The Explorer</h4>
        <p><strong>Demographics:</strong> 20-year-old university student, constantly listening to music while studying.</p>
        <p><strong>Goals:</strong> To quickly find new music from artists they already like. Wants to hear a preview before committing to a full song, is open to discovering new music or genre.</p>
        <p><strong>Frustrations:</strong> Gets stuck in algorithmic loops on streaming apps. Finds it tedious to switch between apps to listen and then find the song again later. When they hear a cool song snippet in a video on social media, they want to save it but can’t do it directly in the app instead they have to open their music app, search for the song based on the snippet they remember and then only then save it to a playlist.</p>
        <p><strong>Key Behaviours:</strong> Uses their phone for quick searches. Values efficiency and clean design. Likely to use the search function immediately.</p>
       
        <h4>Persona 2 - Maya The Playlist Curator </h4>
        <p><strong>Demographics:</strong> 28-year-old who loves hosting friends and creating the perfect ambiance.</p>
        <p><strong>Goals:</strong> To find specific songs that fit a vibe and save them for later. To build a list of potential tracks for a party playlist.</p>
        <p><strong>Frustrations:</strong> Forgets song names heard briefly in a cafe or online. Doesn't like cluttering her main streaming service with one-off saves.</p>
        <p><strong>Key Behaviours:</strong> Plans ahead on a laptop. Enjoys the process of discovering and curating. Will use the favourites feature extensively.</p>
        
        <h3>User Flow</h3>
        <div class="media-container horizontal-media">
          <img src="/images/FlowDiagram.png" alt="User Flow Diagram">
        </div>
        
        <h3>Sitemap</h3>
        <div class="media-container horizontal-media">
          <img src="/images/InformationStructureDiagram.png" alt="Information Structure Diagram">
        </div>
      </div>
    `,
  },
  project4: {
    content: `
      <div class="case-study">
        <h2>VentSafe – Design Challenge </h2>
        <div class="case-meta">UI/UX Designer & Web Developer | Aug 2026</div>
        
        <h3>The Challenge</h3>
        <p>I have been engaged to redesign the user interface for VentSafe — a real-time monitoring system used by underground mining operations to track ventilation, air quality, and worker safety conditions.</p>
        <p>This is a safety-critical, high-stakes environment and the design decisions have real consequences.</p>
        
        <h3>User Personas</h3>
        
        <h4>Persona 1 - Sarah Nkosi – Safety Officer</h4>
        <p><strong>Age:</strong> 36</p>
        <p><strong>Occupation:</strong> Senior Safety Officer</p>
        <p><strong>Experience:</strong> 7 years in mining safety, 4 years using VentSafe</p>
        <p><strong>Location:</strong> Control Room</p>

        <h3>Context of Use</h3>
        <p>Sarah works in a control room on the surface, monitoring 3 underground levels through 50+ sensors. She’s responsible for the safety of 200+ miners. Her day is far from typical as she’s constantly evaluating, implementing, and enforcing safety protocols. Her primary mission is to minimize risks and ensure every worker returns home safely.</p>

        <h3>Scenario</h3>
        <p>It's 2:37 AM on a night shift. Sarah has been on duty for 8 hours and is feeling the fatigue of the shift. Suddenly, her desktop screen flashes bright red with a siren sound - a methane spike on Level 2. She immediately sees the alert card: "CRITICAL - Methane 2.8% (Threshold 2.0%)".</p>
        <p>Her training kicks in - she uses her analytical skills to assess the situation. She clicks the large "Acknowledge" button within 10 seconds. The system automatically notifies the response team and logs the incident.</p>
        <p>Sarah now monitors the situation. She needs to investigate: What caused the spike? Is it a sensor malfunction or a real gas leak? She pulls up the historical trend data to understand the pattern.</p>
        <p>Within 15 minutes, the methane levels return to normal. The team confirms the issue is resolved. Sarah reviews the auto-populated incident report and sees that all the sensor data is already logged. She adds her investigation notes and submits it for compliance.</p>
        <p>Her attention to detail caught the alert. Her analytical skills helped solve the problem. Her communication skills ensure the next shift knows what happened.</p>

        <h3>Key Goals (Sarah)</h3>
        <ol>
          <li><strong>See critical alerts immediately:</strong> This is essential because every second counts in an emergency.</li>
          <li><strong>Acknowledge alerts with one click:</strong> This is important because there is no time for complex interactions under pressure as its high-stakes environment.</li>
          <li><strong>View historical trends:</strong> This way Sarah understands patterns and root causes.</li>
          <li><strong>Hand over shift summary:</strong> This ensures the safety officer has full context as it strengthens communication amongst other officers or colleagues.</li>
        </ol>
         
        <h4>Persona 2 - Piet Van der Merwe – Shift Supervisor</h4>
        <p><strong>Age:</strong> 41</p>
        <p><strong>Occupation:</strong> Shift Supervisor</p>
        <p><strong>Experience:</strong> 12 years mining, 3 years as supervisor</p>
        <p><strong>Location:</strong> Underground + Surface (moves between both)</p>

        <h3>Context of Use</h3>
        <p>Piet is the bridge between management and frontline workers, as he is accountable for:</p>
        <ul>
          <li>Overseeing daily site operations</li>
          <li>Ensuring compliance with Occupational Health and Safety Act</li>
          <li>Monitoring hazard controls</li>
          <li>Managing worker performance</li>
          <li>Leading incident response procedures</li>
        </ul>
        <p>He manages a team of 50 miners underground. He's constantly moving between levels and the surface. His job is to ensure procedures are followed, risks are controlled, and teams operate productively under strict regulatory frameworks.</p>

        <h3>Scenario</h3>
        <p>Piet is 200m underground on Level 3, overseeing his team of 50 miners. His primary responsibility today is monitoring hazard controls and ensuring compliance with safety procedures.</p>
        <p>Suddenly, his phone buzzes with a push notification: "CRITICAL ALERT - Methane Spike Level 2." The Safety Officer hasn't acknowledged it yet. Piet is in an area with weak signal (only 1 bar).</p>
        <p>He knows he must respond quickly. As a supervisor, he's responsible for leading incident response. The alert still comes through. He sees the large "Acknowledge" button and taps it. The system logs his response, even though he's offline.</p>
        <p>Now he must communicate with his crew. He uses the team status feature to see who's in the affected zone. He coordinates with his team to ensure they're safe and prepares for the shift handover so the next supervisor knows what happened.</p>
        <p>When he reaches the surface 10 minutes later, the data syncs automatically. Without this offline capability, he would have missed the alert and his team's safety would have been compromised.</p>

        <h3>Key Goals (Piet)</h3>
        <ol>
          <li><strong>Receive alerts on mobile:</strong> He's not in the control room and needs real-time updates.</li>
          <li><strong>See team status at a glance:</strong> Know who's underground and where.</li>
          <li><strong>Acknowledge alerts offline:</strong> Connectivity is unreliable underground.</li>
          <li><strong>Respond to escalations quickly:</strong> Must act if Safety Officer misses alert.</li>
          <li><strong>Communicate clearly under pressure:</strong> Must coordinate shift handovers and escalate safety concerns.</li>
        </ol>
        
        <h3>User Journey Map</h3>
        <div class="media-container horizontal-media">
          <img src="/images/UserJourneyMap.png" alt="User Journey Map">
        </div>
        
        <h3>Sitemap</h3>
        <div class="media-container horizontal-media">
          <img src="/images/InformationArchitectureVentSafe.png" alt="Sitemap">
        </div>

        <h3>Navigation Flow</h3>
        <h4>Safety Officer, Sarah Nkosi</h4>
        <div class="media-container horizontal-media">
          <img src="/images/NavigationflowSafetyOfficer.png" alt="Navigation Flow (Safety Officer, Sarah Nkosi)">
        </div>

        <h4>Shift Supervisor, Piet</h4>
        <div class="media-container horizontal-media">
          <img src="/images/NavigationflowShiftSupervisor.png" alt="Navigation Flow (Shift Supervisor, Piet)">
        </div>

        <h3>Wireframes (Mid-Fidelity)</h3>
        <h4>Alert & Emergency Response Flow</h4>
        
        <div class="wireframe-section">
          
          <div class="wireframe-subsection">
            <h4>Mobile Alert Notification</h4>
            <div class="wireframe-description">
              <p><strong>Warning icon at top</strong> indicates CRITICAL severity (Von Restorff Effect)</p>
              <p><strong>Large buttons (56px)</strong> for gloved hands (Fitts's Law)</p>
              <p><strong>Only 2-3 choices</strong> to reduce decision time (Hick's Law)</p>
              <p>Sarah is already under stress, progressive disclosure ensures she doesn't get overwhelmed with unnecessary data</p>
            </div>
            <div class="wireframe-image vertical-grid">
              <div class="media-container vertical-media">
                <img src="/images/Mobilealertnotification.png" alt="Mobile Alert Notification Wireframe">
              </div>
            </div>
          </div>
          
          <div class="wireframe-subsection">
            <h4>Acknowledge Confirmation</h4>
            <div class="wireframe-description">
              <p><strong>Von Restorff Effect:</strong> Large green confirmation box with ‘check’ icon dominates the screen. The shift from red (danger) to green (safe) immediately signals closure and resolution.</p>
              <p><strong>Fitts’s Law:</strong> Both buttons are large, easy to click, well-spaced. Large buttons help her navigate without frustration.</p>
              <p><strong>Hick’s Law:</strong> Only 2 choices: "View Team Status" or "Return to Dashboard". Sarah just made a high-stakes decision so now she needs simple, clear next steps without decision fatigue.</p>
              <p><strong>Cognitive Load Theory:</strong> Only essential information is shown: who acknowledged, when, and what was the resolution.</p>
              <p><strong>Gestalt Principles:</strong> All confirmation details are grouped together in a single visual block. Sarah can see the entire confirmation at a glance.</p>
            </div>
            <div class="wireframe-image vertical-grid">
              <div class="media-container vertical-media">
                <img src="/images/AcknowledgeConfirmation.png" alt="Acknowledge Confirmation Wireframe">
              </div>
            </div>
          </div>

          <div class="wireframe-subsection">
            <h4>Mobile Escalation flow (for Supervisor)</h4>
            <div class="wireframe-description">
              <p><strong>Von Restorff Effect:</strong> Amber (#F39C12) is used on the "Escalate" button instead of red on the "acknowledge" button. This is visually distinct but still urgent, indicating escalation rather than initial danger.</p>
              <p><strong>Fitts’s Law:</strong> Both buttons are large, easy to tap with or without gloves. Assuming with the assumption that Piet, the Supervisor is underground wearing safety gloves.</p>
              <p><strong>Hick’s Law:</strong> Only 2 choices: Acknowledge (Offline) or Escalate (To Manager). Piet is underground, possibly in a noisy environment and he needs to make a fast decision without scanning multiple options.</p>
              <p><strong>Cognitive Load Theory:</strong> The interface is designed to minimize cognitive load by presenting only the most critical information and actions needed for escalation.</p>
              <p><strong>Gestalt Principles:</strong> Weak signal and offline mode indicators are grouped together as "connectivity status". Piet's brain groups these together and he immediately knows his connectivity context.</p>
            </div>
            <div class="wireframe-image vertical-grid">
              <div class="media-container vertical-media">
                <img src="/images/EscalationFlow.png" alt="Mobile Escalation Flow Wireframe">
              </div>
            </div>
          </div>

          <div class="wireframe-subsection">
            <h4>Mobile Incident Log</h4>
            <div class="wireframe-description">
              <p><strong>Von Restorff Effect:</strong> Critical status at the top indicates CRITICAL severity.</p>
              <p><strong>Fitts’s Law:</strong> Both buttons are large, easy to click, well-spaced.</p>
              <p><strong>Hick’s Law:</strong> Only 3 export choices: PDF, Excel. Zanele doesn't need to think, she just chooses the format she needs.</p>
              <p><strong>Cognitive Load Theory:</strong> Data organised in a clean grid; sensor data in a separate box.</p>
              <p><strong>Gestalt Principles:</strong> Related data grouped together (incident details, sensor data, export options).</p>
            </div>
            <div class="wireframe-image vertical-grid">
              <div class="media-container vertical-media">
                <img src="/images/IncidentLog.png" alt="Mobile Incident Log Wireframe">
              </div>
            </div>
          </div>

          <div class="wireframe-subsection">
            <h4>Mobile Alert Notification (High-Fidelity)</h4>
            <div class="wireframe-description">
              <p><strong>What the Mockup Shows:</strong> My Hi-Fi mockup demonstrates the most critical moment in the emergency response flow: the transition from receiving a critical alert to successfully acknowledging it.</p>
              <p><strong>Alert Details:</strong> The frames show the mobile push notification with full alert context and hifi screens.</p>
            </div>
            <div class="wireframe-image dual-grid">
              <div class="media-container vertical-media">
                <img src="/images/MobileAlertNotificationHighFidelity.png" alt="Mobile Alert Notification HiFi 1">
              </div>
              <div class="media-container vertical-media">
                <img src="/images/MobileAlertNotificationHifi.png" alt="Mobile Alert Notification HiFi 2">
              </div>
            </div>
          </div>

        </div> <!-- Close wireframe-section -->

         <h3>Style Guide</h3>
         <h4>Colour Palette</h4>
        
          <div class="media-container horizontal-media">
          <img src="/images/Colour.png" alt="Colour palette">
        </div>

        <h4>Font</h4>
         <div class="media-container horizontal-media">
          <img src="/images/Font.png" alt="Font">
        </div>


        <h3>Prototype</h3>
        <p><a href="https://www.figma.com/proto/UdsqvDwTfuLQk9FYRbtPcx/VentSafe?node-id=178-1490&p=f&t=byp2cabDHCemTW67-1&scaling=min-zoom&content-scaling=fixed&page-id=106%3A275" target="_blank" rel="noopener noreferrer" class="external-link">View Mobile Alert Notification Prototype &rarr;</a></p>
        
      </div>
    `,
  },
};

// ============================================
// API ENDPOINT
// ============================================
app.post("/api/verify-password", (req, res) => {
  const { password, projectId } = req.body;

  if (password === CORRECT_PASSWORD) {
    const caseStudy = caseStudies[projectId];
    if (caseStudy) {
      res.json({ success: true, caseStudy: caseStudy.content });
    } else {
      res.json({ success: false, error: "Project not found" });
    }
  } else {
    res.json({ success: false, error: "Incorrect password" });
  }
});

// ============================================
// ROUTES
// ============================================
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/work", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "work.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "contact.html"));
});

// ============================================
// START SERVER
// ============================================
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});