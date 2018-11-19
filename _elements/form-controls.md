---
layout: styleguide
type: component
title: Forms
lead: USAJOBS adds or clarifies design for labels, contextual help, required/optional field handling, and legend.
---

<a href="{{ site.baseurl }}/getting-started/#maturity" class="usa-label maturity design_complete">
  Design Complete
</a>

<h2 class="usa-heading" id="contextual-help">Contextual Help</h2>
<p class="usa-font-lead">
  Contextual help provides assistance in clarifying the intent of a question or form input.
</p>

<div class="preview">
  <h6 class="usa-heading-alt">Brief help</h6>
  <form class="usajobs-form">
    <label for="input-type-text">Text input label</label>
    <input id="input-type-text" name="input-type-text" type="text">
    <p class="usajobs-form__help-brief">
      Some concise help text that explains the intent of the form input.
    </p>
  </form>
</div>

<div class="usa-accordion-bordered usa-accordion-docs">
  <button class="usa-button-unstyled usa-accordion-button"
      aria-expanded="true" aria-controls="collapsible-0">
    Documentation
  </button>
  <div id="collapsible-0" aria-hidden="false" class="usa-accordion-content">
    <h4 class="usa-heading">Usability</h4>
    <h5>When to use</h5>
    <ul class="usa-content-list">
      <li>A concise explanation of the intent of the question or data being requested can be provided without the need for deeper explanation.</li>
      <li>As a replacement for placeholder text in order to provide an example of the type of data being requested.</li>
    </ul>
    <h5>When to consider something else</h5>
    <ul class="usa-content-list">
      <li>When a more detailed explanation is needed.</li>
      <li>When you want to provide supporting documentation or policy.</li>
    </ul>
    <h5>Guidance</h5>
    <ul class="usa-content-list">
      <li>Help text must not begin with a "-" (dash) or other punctuation.</li>
    </ul>
  </div>
</div>

<div class="preview">
  <h6 class="usa-heading-alt" id="detailed-help">Detailed Help</h6>
  <form class="usajobs-form">
    <label for="input-type-text">Text input label</label>
    <input id="input-type-text" name="input-type-text" type="text">
    <div class="usa-accordion-bordered usajobs-form__help-detailed">
      <ul class="usa-unstyled-list">
        <li>
          <div class="usajobs-accordion">
            <button class="usa-accordion-button usajobs-form__help-detailed-trigger" aria-expanded="false" aria-controls="collapsible-0">
              <span class="fa fa-question-circle"></span> Help me answer
            </button>
            <div id="collapsible-0" aria-hidden="true" class="usa-accordion-content">
              <p>[Detailed help explaining the intent of the data request.]</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </form>

  <h6 class="usa-heading-alt is-deprecated">Outside help - DEPRECATED</h6>
  <form class="usajobs-form">
    <label for="input-type-text">Text input label <i class="help-icon fa fa-question-circle"></i></label>
    <input id="input-type-text" name="input-type-text" type="text">
  </form>
</div>

<div class="usa-accordion-bordered usa-accordion-docs">
  <button class="usa-button-unstyled usa-accordion-button"
      aria-expanded="true" aria-controls="collapsible-0">
    Documentation
  </button>
  <div id="collapsible-0" aria-hidden="false" class="usa-accordion-content">
    <h4 class="usa-heading">Usability</h4>
    <h5>When to use</h5>
    <ul class="usa-content-list">
      <li>A detailed explanation of the data being requested is necessary.</li>
      <li>Additional context for why the request is being made is desired.</li>
      <li>To replace the existing help icon treatment that links to Help. It is preferred to bring the help onto the page, ideally with an AJAX request to pull the content from the Help Center into this help section.</li>
    </ul>
    <h5>When to consider something else</h5>
    <ul class="usa-content-list">
      <li>A more detailed explanation is not necessary.</li>
    </ul>
  </div>
</div>

<h2 class="usa-heading" id="dropdown">Dropdown</h2>
<p class="usa-font-lead">
  Our dropdown adds protection from the text running into the dropdown arrow. We also have adopted the <a href="https://github.com/harvesthq/chosen">Chosen plugin</a> for long dropdown menus.
</p>
<div class="preview">
  <form class="usajobs-form">
    <label for="options">Dropdown label</label>
    <select name="options" id="options">
      <option value="value1">abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz</option>
      <option value="value2">Option B</option>
      <option value="value3">Option C</option>
    </select>

    <h6 class="usa-heading-alt">Single select</h6>
    <label for="ParentOrganizationID" class="labeltext">Department &amp; Agency</label>
    <select data-val="true" data-val-number="This field must be a number." id="ParentOrganizationID" name="ParentOrganizationID" class="usajobs-form-select--entry" data-placeholder="Please Select">
      <option value=""></option>
      <optgroup label="Court Services and Offender Supervision Agency for DC">
        <option value="577">Court Services and Offender Supervision Agency for DC - Agency Wide</option>
        <option value="578">Office of the Director</option>
        <option value="579">Pretrial Services Agency</option>
      </optgroup>
      <optgroup label="Department Of Agriculture">
        <option value="110">Agricultural Marketing Service</option>
        <option value="111">Agricultural Research Service</option>
        <option value="131">Agriculture, Office of the Chief Financial Officer</option>
        <option value="112">Agriculture, Rural Housing Service</option>
        <option value="126">Animal and Plant Health Inspection Service</option>
        <option value="133">Civil Rights</option>
        <option value="947">Department of Agriculture - Agency Wide</option>
        <option value="134">Departmental Administration</option>
        <option value="120">Economic Research Service</option>
        <option value="137">Farm Service Agency</option>
        <option value="844">Food and Nutrition Service</option>
        <option value="128">Food Safety and Inspection Service</option>
        <option value="114">Foreign Agricultural Service</option>
        <option value="115">Forest Service</option>
        <option value="127">Grain Inspection, Packers and Stockyards Administration</option>
        <option value="949">Homeland Security Staff</option>
        <option value="121">National Agricultural Statistics Service</option>
        <option value="140">National Appeals Division</option>
        <option value="122">National Institute of Food and Agriculture</option>
        <option value="119">Natural Resources Conservation Service</option>
        <option value="948">Office of Advocacy and Outreach</option>
        <option value="130">Office of Budget and Program Analysis</option>
        <option value="116">Office of Communications</option>
        <option value="917">Office of Environmental Markets</option>
        <option value="129">Office of the Chief Economist</option>
        <option value="139">Office of the Chief Information Officer</option>
        <option value="136">Office of the Executive Secretariat</option>
        <option value="117">Office of the General Counsel</option>
        <option value="123">Office of the Inspector General</option>
        <option value="109">Office of the Secretary of Agriculture</option>
        <option value="113">Risk Management Agency</option>
        <option value="125">Rural Business-Cooperative Service</option>
        <option value="118">Rural Utilities Service</option>
      </optgroup>
      <optgroup label="Department Of Commerce">
        <option value="208">Bureau of Economic Analysis</option>
        <option value="219">Bureau of Industry and Security</option>
        <option value="210">Commerce, International Trade Administration</option>
        <option value="950">Department of Commerce - Agency Wide</option>
        <option value="207">Economic Development Administration</option>
        <option value="218">Economics and Statistics Administration</option>
        <option value="213">Minority Business Development Agency</option>
        <option value="212">National Institute of Standards and Technology</option>
        <option value="209">National Oceanic and Atmospheric Administration</option>
        <option value="215">National Technical Information Service</option>
        <option value="214">National Telecommunications and Information Administration</option>
        <option value="217">Office of the Inspector General</option>
        <option value="206">Office of the Secretary</option>
        <option value="211">Patent and Trademark Office</option>
        <option value="205">Technology Administration</option>
        <option value="216">U.S. Census Bureau</option>
      </optgroup>
      <optgroup label="Department of Defense">
        <option value="699">Armed Forces Radiobiology Research Institute</option><option value="244">Army and Air Force Exchange Service (nonappropriated fund)</option><option value="727">Business Transformation Agency</option><option value="248">Consolidated Metropolitan Technical Personnel Center</option><option value="918">Defense Acquisition University</option><option value="231">Defense Advanced Research Projects Agency</option><option value="251">Defense Career Management and Support Agency</option><option value="719">Defense Civilian Personnel Advisory Service</option><option value="242">Defense Commissary Agency</option><option value="228">Defense Contract Audit Agency</option><option value="252">Defense Contract Management Agency</option><option value="243">Defense Finance and Accounting Service</option><option value="249">Defense Health Agency</option><option value="245">Defense Human Resources Activity</option><option value="222">Defense Information Systems Agency</option><option value="223">Defense Intelligence Agency</option><option value="237">Defense Legal Services Agency</option><option value="225">Defense Logistics Agency</option><option value="760">Defense Media Activity</option><option value="700">Defense Microelectronics Activity</option><option value="1010">Defense Personnel Accounting Agency</option><option value="247">Defense Prisoner of War/Missing Personnel Office</option><option value="734">Defense Programs Support Activity</option><option value="224">Defense Security Cooperation Agency</option><option value="230">Defense Security Service</option><option value="707">Defense Technical Information Center</option><option value="241">Defense Technology Security Administration</option><option value="250">Defense Threat Reduction Agency</option><option value="951">Department of Defense - Agency Wide</option><option value="255">Department of Defense Counterintelligence Field Activity</option><option value="233">Department of Defense Education Activity</option><option value="711">Department of Defense Test Resource Management Center</option><option value="1">Department of the Air Force</option><option value="3">Department of the Army</option><option value="16">Department of the Navy</option><option value="253">Eastern Regional Support Center</option><option value="740">Joint Improvised Explosive Device Defeat Organization</option><option value="239">Missile Defense Agency</option><option value="686">National Defense University</option><option value="229">National Geospatial-Intelligence Agency</option><option value="240">National Security Agency/Central Security Service</option><option value="236">Office of Economics Adjustment</option><option value="238">Office of Inspector General</option><option value="220">Office of the Secretary of Defense</option><option value="221">Organization of the Joint Chiefs of Staff</option><option value="254">Pentagon Force Protection Agency</option><option value="701">Pentagon Renovation Program Office</option><option value="226">U.S. Court of Appeals for the Armed Forces</option><option value="850">U.S. Transportation Command</option><option value="847">Unified Combatant Command Headquarters</option><option value="232">Uniformed Services University of the Health Sciences</option><option value="702">Virginia Contracting Activity</option><option value="235">Washington Headquarters Services</option>
      </optgroup>
      <optgroup label="Department of Defense - Dept. of the Air Force">
        <option value="85">11th Wing</option><option value="1012">AF Installation and Mission Support</option><option value="52">Air Combat Command</option><option value="44">Air Education and Training Command</option><option value="731">Air Elements Defense Intelligence Agency</option><option value="963">Air Force Agency for Modeling/Simulation</option><option value="37">Air Force Audit Agency</option><option value="690">Air Force C2 &amp; Intelligence, Surveillance &amp; Reconnaissance</option><option value="103">Air Force Center for Engineer &amp; Environment</option><option value="1003">Air Force Civil Engineer Center</option><option value="713">Air Force Civilian Career Training</option><option value="35">Air Force Communications Agency (Historical)</option><option value="65">Air Force Cost Analysis Agency</option><option value="756">Air Force Cyber Command</option><option value="726">Air Force District of Washington</option><option value="767">Air Force Element OSD</option><option value="102">Air Force Elements</option><option value="81">Air Force Elements NORAD</option><option value="92">Air Force Elements, NATO</option><option value="90">Air Force Elements, U.S. Central Command</option><option value="691">Air Force Elements, U.S. European Command</option><option value="96">Air Force Elements, U.S. Joint Forces Command</option><option value="97">Air Force Elements, U.S. Pacific Command</option><option value="95">Air Force Elements, U.S. Southern Command</option><option value="91">Air Force Elements, U.S. Special Operations Command</option><option value="98">Air Force Elements, U.S. Strategic Command</option><option value="101">Air Force Elements, U.S. Transportation Command</option><option value="745">Air Force Financial Services</option><option value="104">Air Force Frequency Management Agency</option><option value="766">Air Force Global Strike Command</option><option value="74">Air Force Historical Research Agency</option><option value="32">Air Force Inspection Agency (FO)</option><option value="1000">Air Force Installation Contracting Agency</option><option value="36">Air Force Intelligence Analysis Agency</option><option value="49">Air Force Intelligence, Surveillance, &amp; Reconnaissance Agency</option><option value="69">Air Force Legal Operations Agency</option><option value="54">Air Force Logistics Management Agency</option><option value="57">Air Force Materiel Command</option><option value="88">Air Force Medical Operations Agency</option><option value="70">Air Force Medical Support Agency</option><option value="1011">Air Force Mortuary Affairs Operations</option><option value="64">Air Force National Security Emergency Preparedness</option><option value="715">Air Force Nuclear Weapons Agency</option><option value="38">Air Force Office of Special Investigations</option><option value="34">Air Force Operational Test and Evaluation Center</option><option value="72">Air Force Operations Group</option><option value="40">Air Force Personnel Center</option><option value="68">Air Force Personnel Operations Agency</option><option value="746">Air Force Petroleum Agency</option><option value="80">Air Force Program Executive Office</option><option value="764">Air Force Public Affairs Agency</option><option value="43">Air Force Reserve Personnel Center</option><option value="76">Air Force Review Boards Agency</option><option value="82">Air Force Safety Center</option><option value="83">Air Force Services Agency</option><option value="716">Air Force Special Operations Command</option><option value="77">Air Force Studies and Analyses Agency</option><option value="75">Air Force Technical Applications Center</option><option value="712">Air Force Wide Support Element</option><option value="108">Air Force, Special Operations Command</option><option value="55">Air Mobility Command</option><option value="89">Air National Guard</option><option value="73">Air National Guard Readiness Center</option><option value="106">Air National Guard Units (Title 32)</option><option value="1013">Defense Health Agency Air Force Element</option><option value="46">Headquarters, Air Force Reserve Command</option><option value="60">Headquarters, Air Force Space Command</option><option value="79">Headquarters, Air Weather Agency</option><option value="39">Headquarters, U.S. Air Force Security Forces Center</option><option value="59">HQ AF Flight Standards Agency</option><option value="765">HQ USAF and Support Elements</option><option value="717">HQ USAF Direct Support Element</option><option value="47">Immediate Office, Headquarters, USAF</option><option value="48">Pacific Air Forces</option><option value="913">U.S. Air Force - Agency Wide</option><option value="41">U.S. Air Force Academy</option><option value="42">U.S. Air Forces, Europe</option><option value="714">U.S. Northern Command</option><option value="107">U.S. Special Operations Command (ANG, Title 32)</option><option value="757">United States Africa Command</option>
      </optgroup>
      <optgroup label="Department of Defense - Dept. of the Army">
        <option value="157">1st Personnel Command</option><option value="154">21st Theater Sustainment Command (TSC)</option><option value="152">59th Ordnance Brigade</option><option value="147">Army Installation Management Command</option><option value="172">Army National Guard Units (Title 32)</option><option value="192">Army Tank-Automotive and Armament Command (TACOM)</option><option value="174">Eighth U.S. Army</option><option value="178">Field Operating Offices of the Office of the Secretary of the Army</option><option value="187">Headquarters, AMC</option><option value="188">Headquarters, Staff Support Activities, AMC</option><option value="180">HQDA Field Operating Agencies and Staff Support Agencies</option><option value="153">Immediate Office of the Commander-in-Chief of the U.S. Army</option><option value="165">Joint Activities</option><option value="182">Joint Services and Activities Supported by the Office, Secretary of the Army</option><option value="199">Materiel Acquisition Activities</option><option value="200">Materiel Acquisition Project Managers</option><option value="204">Materiel Readiness Activities</option><option value="181">Miscellaneous Field Operating Agencies</option><option value="150">Office of the Chief of Staff of the Army</option><option value="161">Office of the Chief of the National Guard Bureau</option><option value="177">Office of the Secretary of the Army</option><option value="159">Seventh Army Training Command</option><option value="168">Surgeon General</option><option value="189">Training Activities, AMC</option><option value="964">U.S. Army - Agency Wide</option><option value="965">U.S. Army Accession Command</option><option value="846">U.S. Army Acquisition Support Center</option><option value="1004">U.S. Army Africa/Southern European Task Force (USAFRAF/SETAF)</option><option value="191">U.S. Army Aviation and Missile Command</option><option value="748">U.S. Army Central</option><option value="196">U.S. Army Chemical Materials Activity</option><option value="193">U.S. Army Communications Electronics Command</option><option value="198">U.S. Army Contracting Command</option><option value="967">U.S. Army Corps of Engineers</option><option value="148">U.S. Army Criminal Investigation Command</option><option value="987">U.S. Army Cyber Command</option><option value="164">U.S. Army Element SHAPE</option><option value="160">U.S. Army Forces Command</option><option value="163">U.S. Army Health Services Command</option><option value="144">U.S. Army Intelligence and Security Command</option><option value="202">U.S. Army Joint Munitions Command</option><option value="167">U.S. Army Medical Command</option><option value="171">U.S. Army Military District of Washington</option><option value="203">U.S. Army Military Surface Deployment and Distribution Command</option><option value="677">U.S. Army Network Enterprise Technology Command/9th Army Signal Command</option><option value="749">U.S. Army North</option><option value="695">U.S. Army Research, Development and Engineering Command</option><option value="162">U.S. Army Reserve Command</option><option value="201">U.S. Army Security Assistance Command</option><option value="750">U.S. Army South</option><option value="185">U.S. Army Southern Command</option><option value="179">U.S. Army Space and Missile Defense Command/U. S. Army Forces Strategic Command</option><option value="197">U.S. Army Sustainment Command</option><option value="145">U.S. Army Test and Evaluation Command</option><option value="186">U.S. Army Training and Doctrine Command</option><option value="156">U.S. Army V Corps</option><option value="721">U.S. Army War College</option><option value="173">U.S. Army, Pacific</option><option value="166">U.S. Military Academy</option><option value="158">U.S. Military Community Activity, Heidelberg</option><option value="966">U.S. Military Entrance Processing Command</option><option value="183">U.S. Special Operations Command (Army)</option>
      </optgroup>
      <optgroup label="Department of Defense - Dept. of the Navy">
        <option value="435">Bureau of Naval Personnel</option>
        <option value="448">Chief of Naval Education and Training</option>
        <option value="678">Commander, Navy Installations</option>
        <option value="429">Immediate Office of the Chief of Naval Operations</option>
        <option value="426">Immediate Office of the Secretary of the Navy</option>
        <option value="443">Military Sealift Command</option>
        <option value="434">Naval Air Systems Command</option>
        <option value="688">Naval Education and Training Command</option>
        <option value="439">Naval Facilities Engineering Command</option>
        <option value="432">Naval Intelligence Command</option>
        <option value="433">Naval Medical Command</option>
        <option value="450">Naval Meteorology and Oceanography Command</option>
        <option value="453">Naval Reserve Force</option>
        <option value="437">Naval Sea Systems Command</option>
        <option value="451">Naval Security Group Command</option>
        <option value="454">Naval Special Warfare Command</option>
        <option value="436">Naval Supply Systems Command</option>
        <option value="428">Navy Field Offices</option>
        <option value="427">Navy Staff Offices</option>
        <option value="445">Navy Systems Management Activity</option>
        <option value="431">Office of Naval Research</option>
        <option value="430">Secretary of the Navy/Assistant for Administration (DON/AA)</option>
        <option value="444">Space and Naval Warfare Systems Command</option>
        <option value="442">Strategic Systems Programs Office</option>
        <option value="446">U.S. Atlantic Fleet, Commander in Chief</option>
        <option value="440">U.S. Marine Corps</option>
        <option value="447">U.S. Naval Forces, Europe</option>
        <option value="969">U.S. Navy - Agency Wide</option>
        <option value="452">U.S. Pacific Fleet, Commander in Chief</option>
        <option value="455">U.S. Special Operations Command (Navy)</option>
      </optgroup>
      <optgroup label="Department Of Education">
        <option value="316">Advisory Councils and Committees</option><option value="952">Department of Education - Agency Wide</option><option value="307">Federal Student Aid</option><option value="295">Immediate Office of the Secretary of Education</option><option value="310">Institute of Education Sciences</option><option value="317">National Assessment Governing Board</option><option value="315">National Institute for Literacy</option><option value="297">Office for Civil Rights</option><option value="723">Office of Communications and Outreach</option><option value="311">Office of Elementary and Secondary Education</option><option value="312">Office of English Language Acquisition</option><option value="313">Office of Innovation and Improvement</option><option value="299">Office of Inspector General</option><option value="304">Office of Intergovernmental and Interagency Affairs</option><option value="303">Office of Legislation and Congressional Affairs</option><option value="306">Office of Management</option><option value="733">Office of Planning, Evaluation and Policy Development</option><option value="308">Office of Postsecondary Education</option><option value="309">Office of Safe and Drug-Free Schools</option><option value="301">Office of Special Education and Rehabilitative Services</option><option value="305">Office of the Chief Financial Officer</option><option value="302">Office of the Chief Information Officer</option><option value="296">Office of the Deputy Secretary of Education</option><option value="300">Office of the General Counsel</option><option value="298">Office of the Under Secretary</option><option value="314">Office of Vocational and Adult Education</option>
      </optgroup>
      <optgroup label="Department Of Energy">
        <option value="953">Bonneville Power Administration</option><option value="318">Department of Energy</option><option value="993">Federal Energy Regulatory Commission (FERC)</option><option value="912">National Nuclear Security Administration</option><option value="747">Southwestern Power Administration</option><option value="739">Western Area Power Administration</option>
      </optgroup>
      <optgroup label="Department Of Health And Human Services">
        <option value="352">Administration for Children and Families</option><option value="341">Administration for Community Living</option><option value="344">Agency for Healthcare Research and Quality</option><option value="346">Agency for Toxic Substances and Disease Registry</option><option value="350">Centers for Disease Control and Prevention</option><option value="351">Centers for Medicare &amp; Medicaid Services</option><option value="954">Department of Health and Human Services - Agency Wide</option><option value="347">Food and Drug Administration</option><option value="345">Health Resources and Services Administration</option><option value="348">Indian Health Service</option><option value="349">National Institutes of Health</option><option value="1008">Office of Inspector General</option><option value="342">Office of the Assistant Secretary of Health</option><option value="339">Office of the Secretary of Health and Human Services</option><option value="340">Program Support Center</option><option value="343">Substance Abuse and Mental Health Services Administration</option>
      </optgroup>
      <optgroup label="Department Of Homeland Security">
        <option value="354">Citizenship and Immigration Services</option><option value="361">Customs and Border Protection</option><option value="955">Department of Homeland Security - Agency Wide</option><option value="353">DHS Headquarters</option><option value="365">Domestic Nuclear Detection Office</option><option value="364">Federal Emergency Management Agency</option><option value="362">Federal Law Enforcement Training Centers</option><option value="359">Immigration and Customs Enforcement</option><option value="363">National Protection and Programs Directorate</option><option value="357">Office of the Inspector General</option><option value="369">Science and Technology Directorate</option><option value="360">Transportation Security Administration</option><option value="355">U.S. Coast Guard</option><option value="356">U.S. Secret Service</option>
      </optgroup>
      <optgroup label="Department Of Housing And Urban Development">
        <option value="383">Assistant Secretary for Community Planning and Development</option><option value="388">Assistant Secretary for Congressional and Intergovernmental Relations</option><option value="384">Assistant Secretary for Fair Housing and Equal Opportunity</option><option value="392">Assistant Secretary for Housing-Federal Housing Commissioner</option><option value="397">Assistant Secretary for Policy Development and Research</option><option value="401">Assistant Secretary for Public Affairs</option><option value="395">Assistant Secretary for Public and Indian Housing</option><option value="389">Center for Faith-Based and Community Initiatives</option><option value="956">Department of Housing and Urban Development - Agency Wide</option><option value="398">Government National Mortgage Association (Ginnie Mae)</option><option value="399">Office of Departmental Equal Employment Opportunity</option><option value="387">Office of Departmental Operations and Coordination</option><option value="400">Office of Disaster Management and National Security</option><option value="390">Office of Field Policy and Management</option><option value="382">Office of General Counsel</option><option value="391">Office of Healthy Homes and Lead Hazard Control</option><option value="386">Office of Inspector General</option><option value="402">Office of Strategic Planning and Management</option><option value="403">Office of Sustainable Housing and Communities</option><option value="385">Office of the Chief Financial Officer</option><option value="381">Office of the Chief Human Capital Officer</option><option value="396">Office of the Chief Information Officer</option><option value="393">Office of the Chief Procurement Officer</option><option value="380">Office of the Secretary of Housing and Urban Development</option><option value="376">Office of the Senior Coordinator for Great Plains</option><option value="372">Office of the Senior Coordinator for Mid-Atlantic</option><option value="374">Office of the Senior Coordinator for Midwest</option><option value="370">Office of the Senior Coordinator for New England</option><option value="371">Office of the Senior Coordinator for New York/New Jersey</option><option value="379">Office of the Senior Coordinator for Northwest/Alaska</option><option value="378">Office of the Senior Coordinator for Pacific/Hawaii</option><option value="377">Office of the Senior Coordinator for Rocky Mountains</option><option value="373">Office of the Senior Coordinator for Southeast/Caribbean</option><option value="375">Office of the Senior Coordinator for Southwest</option>
      </optgroup>
      <optgroup label="Department Of Justice">
        <option value="275">Bureau of Alcohol, Tobacco, Firearms, and Explosives</option>
        <option value="274">Community Relations Service</option>
        <option value="957">Department of Justice - Agency Wide</option>
        <option value="267">Drug Enforcement Administration</option>
        <option value="273">Executive Office for Immigration Review</option>
        <option value="270">Executive Office for U.S. Attorneys and the Office of the U.S. Attorneys</option>
        <option value="265">Federal Bureau of Investigation</option>
        <option value="266">Justice, Bureau of Prisons/Federal Prison System</option>
        <option value="271">Justice, Office of the Inspector General</option>
        <option value="272">Justice, U.S. Trustee Program</option>
        <option value="268">Office of Justice Programs</option>
        <option value="257">Offices, Boards and Divisions</option>
        <option value="269">U.S. Marshals Service</option>
      </optgroup>
      <optgroup label="Department Of Labor">
        <option value="278">Bureau of International Labor Affairs</option><option value="285">Bureau of Labor Statistics</option><option value="958">Department of Labor - Agency Wide</option><option value="290">Employee Benefits Security Administration</option><option value="283">Employment and Training Administration</option><option value="282">Employment Standards Administration</option><option value="286">Mine Safety and Health Administration</option><option value="291">Occupational Safety and Health Administration</option><option value="279">Office of Congressional and Intergovernmental Affairs</option><option value="281">Office of Disability Employment Policy</option><option value="908">Office of Federal Contract Compliance Programs</option><option value="909">Office of Labor-Management Standards</option><option value="288">Office of Public Affairs</option><option value="277">Office of the Assistant Secretary for Administration and Management</option><option value="289">Office of the Assistant Secretary for Policy</option><option value="280">Office of the Chief Financial Officer</option><option value="284">Office of the Inspector General</option><option value="276">Office of the Secretary of Labor</option><option value="292">Office of the Solicitor</option><option value="910">Office of Workers’ Compensation Programs</option><option value="293">Veterans Employment and Training Services</option><option value="907">Wage and Hour Division</option><option value="294">Women's Bureau</option>
      </optgroup>
      <optgroup label="Department Of State">
        <option value="458">Department of State - Agency Wide</option>
        <option value="962">Eastern Regional Personnel Center</option>
        <option value="961">Materiel Acquisition Support Center</option>
        <option value="959">Metropolitan Technical Support Center</option>
        <option value="960">Northern Regional Personnel Center</option>
      </optgroup>
      <optgroup label="Department Of The Interior">
        <option value="405">Bureau of Land Management</option>
        <option value="929">Bureau of Ocean Energy Management</option>
        <option value="413">Bureau of Ocean Energy Management, Regulation, and Enforcement</option>
        <option value="407">Bureau of Reclamation</option>
        <option value="928">Bureau of Safety and Environmental Enforcement</option>
        <option value="968">Department of Interior - Agency Wide</option>
        <option value="408">Geological Survey</option>
        <option value="406">Interior, Bureau of Indian Affairs</option>
        <option value="410">Interior, US Fish and Wildlife Service</option>
        <option value="758">National Indian Gaming Commission</option>
        <option value="409">National Park Service</option>
        <option value="412">Office of Surface Mining Reclamation and Enforcement</option>
        <option value="414">Office of the Inspector General</option>
        <option value="404">Office of the Secretary of the Interior</option>
        <option value="411">Office of the Solicitor</option>
      </optgroup>
      <optgroup label="Department Of The Treasury">
        <option value="473">Alcohol and Tobacco Tax and Trade Bureau</option><option value="481">Bureau of Engraving and Printing</option><option value="1007">Bureau of the Fiscal Service</option><option value="478">Bureau of the Fiscal Service (BPD)</option><option value="477">Bureau of the Fiscal Service (FMS)</option><option value="971">Department of Treasury - Agency Wide</option><option value="475">Internal Revenue Service</option><option value="476">Office of Inspector General</option><option value="482">Office of the Comptroller of the Currency</option><option value="483">Office of the Inspector General for Tax Administration</option><option value="769">Office of the Special Inspector General for the Troubled Asset Relief Program (SIGTARP)</option><option value="472">Office of Thrift Supervision</option><option value="474">Treasury, Departmental Offices</option><option value="480">Treasury, Financial Crimes Enforcement Network</option><option value="479">U.S. Mint</option>
      </optgroup>
      <optgroup label="Department Of Transportation">
        <option value="970">Department of Transportation - Agency Wide</option><option value="460">Federal Aviation Administration</option><option value="461">Federal Highway Administration</option><option value="471">Federal Motor Carrier Safety Administration</option><option value="462">Federal Railroad Administration</option><option value="464">Federal Transit Administration</option><option value="468">Maritime Administration</option><option value="465">National Highway Traffic Safety Administration</option><option value="467">Office of Inspector General</option><option value="459">Office of the Secretary of Transportation</option><option value="470">Pipeline and Hazardous Materials Safety Administration</option><option value="466">Research and Innovative Technology Administration</option><option value="463">Saint Lawrence Seaway Development Corporation</option><option value="469">Surface Transportation Board</option><option value="696">Transportation Administrative Service Center</option>
      </optgroup>
      <optgroup label="Department Of Veterans Affairs">
        <option value="493">Assistant Secretary for Diversity and Inclusion</option>
        <option value="492">Assistant Secretary for Human Resources Management</option>
        <option value="486">Board of Veterans Appeals</option>
        <option value="991">Dean for VA Learning University</option>
        <option value="753">Department of Veterans Affairs - Agency Wide</option>
        <option value="500">Deputy Assistant Secretary for Acquisition and Logistics</option>
        <option value="494">Deputy Assistant Secretary for Administration</option>
        <option value="498">Deputy Assistant Secretary for Budget</option>
        <option value="511">Deputy Assistant Secretary for Congressional Affairs</option>
        <option value="496">Deputy Assistant Secretary for Corporate Senior Executive Management</option>
        <option value="738">Deputy Assistant Secretary for Emergency Management</option>
        <option value="499">Deputy Assistant Secretary for Finance</option>
        <option value="502">Deputy Assistant Secretary for Information and Technology</option>
        <option value="508">Deputy Assistant Secretary for Intergovernmental Affairs</option>
        <option value="990">Deputy Assistant Secretary for Labor Management Relations</option>
        <option value="708">Deputy Assistant Secretary for Legislative Affairs</option>
        <option value="495">Deputy Assistant Secretary for Office of Resolution Management</option>
        <option value="505">Deputy Assistant Secretary for Planning and Evaluation</option><option value="504">Deputy Assistant Secretary for Program and Data Analysis</option><option value="509">Deputy Assistant Secretary for Public Affairs</option><option value="737">Deputy Assistant Secretary for Security and Law Enforcement</option><option value="709">Deputy Assistant Secretary for Security Preparedness</option><option value="487">General Counsel</option><option value="510">Immediate Office of the Assistant Secretary for Congressional and Legislative Affairs</option><option value="490">Immediate Office of the Assistant Secretary for Human Resources and Administration</option><option value="501">Immediate Office of the Assistant Secretary for Information and Technology</option><option value="497">Immediate Office of the Assistant Secretary for Management</option><option value="736">Immediate Office of the Assistant Secretary for Operations, Security, and Preparedness</option><option value="503">Immediate Office of the Assistant Secretary for Policy and Planning</option><option value="506">National Center for Veteran Analysis and Statistics</option><option value="507">Office of the Assistant Secretary for Public and Intergovernmental Affairs</option><option value="484">Office of the Secretary</option><option value="996">Veteran Employment Services Office</option><option value="488">Veterans Affairs, Inspector General</option><option value="513">Veterans Affairs, National Cemetery Administration</option><option value="514">Veterans Affairs, Veterans Health Administration</option><option value="512">Veterans Benefits Administration</option>
      </optgroup>
      <optgroup label="Executive Office of the President">
        <option value="552">Council of Economic Advisers</option>
        <option value="569">Executive Residence at the White House</option>
        <option value="989">National Commission on Fiscal Responsibility and Reform</option>
        <option value="623">National Security Council</option>
        <option value="562">Office of Administration</option>
        <option value="547">Office of Management and Budget</option>
        <option value="632">Office of National Drug Control Policy</option>
        <option value="560">Office of Policy Development</option>
        <option value="649">Office of Science and Technology Policy</option>
        <option value="972">Office of the Former President</option>
        <option value="654">Office of the President</option>
        <option value="973">Office of the President Elect</option>
        <option value="648">Office of the U.S. Trade Representative</option>
        <option value="653">White House Office</option>
      </optgroup>
      <optgroup label="General Services Administration">
        <option value="326">Civilian Board of Contract Appeals</option>
        <option value="730">Federal Acquisition Service</option>
        <option value="741">General Services Administration - Agency Wide</option>
        <option value="742">GSA, Office of Mission Assurance</option>
        <option value="320">Immediate Office of the Administrator</option>
        <option value="1001">Office of Administrative Services</option>
        <option value="338">Office of Childcare</option>
        <option value="329">Office of Citizen Services and Innovative Technologies</option>
        <option value="322">Office of Civil Rights</option>
        <option value="744">Office of Communications and Marketing</option>
        <option value="330">Office of Congressional and Intergovernmental Affairs</option>
        <option value="325">Office of General Counsel</option>
        <option value="335">Office of Governmentwide Policy</option>
        <option value="327">Office of Human Resources Management</option>
        <option value="328">Office of Inspector General</option>
        <option value="323">Office of Small Business Utilization</option>
        <option value="705">Office of the Chief Acquisition Officer</option>
        <option value="324">Office of the Chief Financial Officer</option>
        <option value="337">Office of the Chief Information Officer</option>
        <option value="1015">Office of the Customer Experience</option>
        <option value="332">Offices of the Regional Administrators</option>
        <option value="321">Public Buildings Service</option>
      </optgroup>
      <optgroup label="Judicial Branch">
        <option value="601">Administrative Office of the U.S. Courts</option>
        <option value="974">Judicial Branch - Agency Wide</option>
        <option value="768">Supreme Court of the United States</option>
        <option value="998">U. S. Sentencing Commission</option>
        <option value="600">U.S. Courts</option>
        <option value="614">U.S. Tax Court</option>
      </optgroup>
      <optgroup label="Legislative Branch">
        <option value="666">Abraham Lincoln Bicentennial Commission</option>
        <option value="603">Architect of the Capitol</option>
        <option value="604">Botanic Garden</option>
        <option value="660">Commission on Security and Cooperation in Europe</option>
        <option value="664">Commission on the People's Republic of China</option>
        <option value="606">Congressional Budget Office</option>
        <option value="663">Dwight D. Eisenhower Memorial Commission</option>
        <option value="980">Financial Crisis Inquiry Commission</option>
        <option value="608">Government Accountability Office</option>
        <option value="612">Government Publishing Office</option>
        <option value="610">House of Representatives</option>
        <option value="613">John C. Stennis Center for Public Service Training and Development</option>
        <option value="997">Legislative Branch - Agency Wide</option>
        <option value="605">Library of Congress</option>
        <option value="658">Medicare Payment Advisory Commission</option>
        <option value="656">Office of Compliance</option>
        <option value="992">Ronald Reagan Centennial Commission</option>
        <option value="611">U.S. Capitol Police</option>
        <option value="661">U.S. Commission on International Religious Freedom</option>
        <option value="655">U.S. Court of Appeals for Veterans Claims</option>
        <option value="662">United States-China Economic and Security Review Commission</option>
      </optgroup>
      <optgroup label="National Aeronautics and Space Administration">
        <option value="416">Ames Research Center</option>
        <option value="419">Armstrong Flight Research Center</option>
        <option value="421">George C. Marshall Space Flight Center</option>
        <option value="420">Goddard Space Flight Center</option>
        <option value="415">Headquarters, NASA</option>
        <option value="422">John C. Stennis Space Center</option>
        <option value="425">John F. Kennedy Space Center</option>
        <option value="417">John Glenn Research Center at Lewis Field</option>
        <option value="418">Langley Research Center</option>
        <option value="423">Lyndon B. Johnson Space Center</option>
        <option value="975">NASA - Agency Wide</option>
        <option value="424">Space Station Program Office</option>
      </optgroup>
      <optgroup label="National Foundation on the Arts and the Humanities">
        <option value="976">Foundation on the Arts and the Humanities - Agency Wide</option>
        <option value="534">Institute of Museum and Library Services</option>
        <option value="532">National Endowment for the Arts</option>
        <option value="533">National Endowment for the Humanities</option>
      </optgroup>
      <optgroup label="Non-Federal Civilian Customers">
        <option value="942">Amtrak - Office of Inspector General</option>
        <option value="999">Public Defender Service for the District of Columbia</option>
      </optgroup>
      <optgroup label="Other Agencies and Independent Organizations">
        <option value="938">Administrative Conference of the United States</option>
        <option value="596">Advisory Council on Historic Preservation</option>
        <option value="537">African Development Foundation</option>
        <option value="994">Agency System Test</option>
        <option value="531">American Battle Monuments Commission</option>
        <option value="538">Appalachian Regional Commission</option>
        <option value="548">Architectural and Transportation Barriers Compliance Board</option>
        <option value="540">Arctic Research Commission</option>
        <option value="457">Armed Forces Retirement Home</option>
        <option value="585">Barry Goldwater Scholarship and Excellence in Education Foundation</option>
        <option value="598">Broadcasting Board of Governors</option>
        <option value="979">Centennial of Flight Commission</option>
        <option value="554">Central Intelligence Agency</option>
        <option value="573">Chemical Safety and Hazard Investigation Board</option>
        <option value="550">Christopher Columbus Fellowship Foundation</option>
        <option value="544">Commission for the Preservation of America’s Heritage Abroad</option>
        <option value="553">Commission of Fine Arts</option>
        <option value="551">Commission on Civil Rights</option>
        <option value="567">Commission on Executive, Legislative, and Judicial Salaries</option>
        <option value="930">Commission on the Prevention of Weapons of Mass Destruction Proliferation and Terrorism</option>
        <option value="594">Committee for Purchase from People Who Are Blind or Severely Disabled</option>
        <option value="556">Commodity Futures Trading Commission</option>
        <option value="944">Consumer Financial Protection Bureau</option>
        <option value="639">Consumer Product Safety Commission</option>
        <option value="602">Corporation for National and Community Service</option>
        <option value="937">Council of the Inspectors General on Integrity and Efficiency</option>
        <option value="542">Defense Nuclear Facilities Safety Board</option>
        <option value="559">Delta Regional Authority</option>
        <option value="735">Denali Commission</option>
        <option value="995">District of Columbia Courts</option>
        <option value="689">Election Assistance Commission</option>
        <option value="565">Environmental Protection Agency</option>
        <option value="563">Equal Employment Opportunity Commission</option>
        <option value="561">Export-Import Bank of the United States</option>
        <option value="575">Farm Credit Administration</option>
        <option value="574">Farm Credit System Insurance Corporation</option>
        <option value="570">Federal Communications Commission</option>
        <option value="571">Federal Deposit Insurance Corporation</option>
        <option value="607">Federal Election Commission</option>
        <option value="572">Federal Financial Institutions Examination Council</option>
        <option value="981">Federal Housing Finance Agency</option>
        <option value="539">Federal Labor Relations Authority</option>
        <option value="616">Federal Maritime Commission</option>
        <option value="576">Federal Mediation and Conciliation Service</option>
        <option value="636">Federal Mine Safety and Health Review Commission</option>
        <option value="988">Federal Reserve System--Board Of Governors</option>
        <option value="634">Federal Retirement Thrift Investment Board</option>
        <option value="581">Federal Trade Commission</option>
        <option value="1006">Gulf Coast Ecosystem Restoration Council</option>
        <option value="545">Illinois and Michigan Canal National Heritage Corridor Commission</option>
        <option value="599">Inter-American Foundation</option>
        <option value="591">International Boundary and Water Commission: United States and Mexico</option>
        <option value="592">International Boundary Commission: United States and Canada</option>
        <option value="651">Japan-United States Friendship Commission</option>
        <option value="643">John F. Kennedy Center for the Performing Arts</option>
        <option value="698">Legal Service Corporation</option>
        <option value="615">Marine Mammal Commission</option>
        <option value="940">Medicaid and CHIP Payment and Access Commission</option>
        <option value="541">Merit Systems Protection Board</option>
        <option value="694">Millennium Challenge Corporation</option>
        <option value="564">Morris K. Udall Scholarship and Excellence in National Environmental Policy Foundation</option>
        <option value="676">Multi-agency</option>
        <option value="622">National Archives and Records Administration</option>
        <option value="621">National Capital Planning Commission</option>
        <option value="558">National Commission on Libraries and Information Science</option>
        <option value="618">National Council on Disability</option>
        <option value="557">National Credit Union Administration</option>
        <option value="640">National Gallery of Art</option>
        <option value="619">National Labor Relations Board</option>
        <option value="620">National Mediation Board</option>
        <option value="617">National Science Foundation</option>
        <option value="646">National Transportation Safety Board</option>
        <option value="939">Northern Border Regional Commission</option>
        <option value="624">Nuclear Regulatory Commission</option>
        <option value="549">Nuclear Waste Technical Review Board</option>
        <option value="626">Occupational Safety and Health Review Commission</option>
        <option value="586">Office of Government Ethics</option>
        <option value="633">Office of Navajo and Hopi Indian Relocation</option>
        <option selected="selected" value="625">Office of Personnel Management</option>
        <option value="582">Office of Special Counsel</option>
        <option value="724">Office of the Director of National Intelligence</option>
        <option value="743">Office of the Federal Coordinator for Alaska Natural Gas Transportation Projects</option>
        <option value="982">Office of the Inspector General for the Federal Housing Finance Agency</option>
        <option value="761">Office of the Inspector General, USPS</option>
        <option value="627">Office of the Vice President</option>
        <option value="584">Overseas Private Investment Corporation</option>
        <option value="631">Peace Corps</option>
        <option value="543">Pension Benefit Guaranty Corporation</option>
        <option value="629">Postal Regulatory Commission</option>
        <option value="587">Presidio Trust</option>
        <option value="1002">Privacy and Civil Liberties Oversight Board</option>
        <option value="732">Public Interest Declassification Board</option>
        <option value="628">Public International Organization</option>
        <option value="635">Railroad Retirement Board</option>
        <option value="771">Recovery Act Accountability and Transparency Board</option>
        <option value="638">Securities and Exchange Commission</option>
        <option value="644">Selective Service System</option>
        <option value="637">Small Business Administration</option>
        <option value="642">Smithsonian Institution </option>
        <option value="645">Social Security Administration</option>
        <option value="650">Tennessee Valley Authority</option>
        <option value="568">Trade and Development Agency</option>
        <option value="536">U.S. Agency for International Development</option>
        <option value="595">U.S. Holocaust Memorial Museum</option>
        <option value="647">U.S. International Trade Commission</option>
        <option value="630">U.S. Postal Service</option>
        <option value="652">Utah Reclamation Mitigation and Conservation Commission</option>
        <option value="588">Valles Caldera Trust</option>
        <option value="590">Vietnam Education Foundation</option>
        <option value="589">White House Commission on the National Moment of Remembrance</option>
        <option value="641">Woodrow Wilson International Center for Scholars</option>
        <option value="1014">World War 1 Centennial Commission</option>
      </optgroup>
    </select>

    <h6 class="usa-heading-alt">Multi select</h6>
    <label for="ParentOrganizationID" class="labeltext">Department &amp; Agency</label>
    <select data-val="true" data-val-number="This field must be a number." id="ParentOrganizationID" name="ParentOrganizationID" class="usajobs-form-select--entry" multiple="true" data-placeholder="Please Select">
      <option value=""></option>
      <optgroup label="Court Services and Offender Supervision Agency for DC">
        <option value="577">Court Services and Offender Supervision Agency for DC - Agency Wide</option>
        <option value="578">Office of the Director</option>
        <option value="579">Pretrial Services Agency</option>
      </optgroup>
      <optgroup label="Department Of Agriculture">
        <option value="110">Agricultural Marketing Service</option>
        <option value="111">Agricultural Research Service</option>
        <option value="131">Agriculture, Office of the Chief Financial Officer</option>
        <option value="112">Agriculture, Rural Housing Service</option>
        <option value="126">Animal and Plant Health Inspection Service</option>
        <option value="133">Civil Rights</option>
        <option value="947">Department of Agriculture - Agency Wide</option>
        <option value="134">Departmental Administration</option>
        <option value="120">Economic Research Service</option>
        <option value="137">Farm Service Agency</option>
        <option value="844">Food and Nutrition Service</option>
        <option value="128">Food Safety and Inspection Service</option>
        <option value="114">Foreign Agricultural Service</option>
        <option value="115">Forest Service</option>
        <option value="127">Grain Inspection, Packers and Stockyards Administration</option>
        <option value="949">Homeland Security Staff</option>
        <option value="121">National Agricultural Statistics Service</option>
        <option value="140">National Appeals Division</option>
        <option value="122">National Institute of Food and Agriculture</option>
        <option value="119">Natural Resources Conservation Service</option>
        <option value="948">Office of Advocacy and Outreach</option>
        <option value="130">Office of Budget and Program Analysis</option>
        <option value="116">Office of Communications</option>
        <option value="917">Office of Environmental Markets</option>
        <option value="129">Office of the Chief Economist</option>
        <option value="139">Office of the Chief Information Officer</option>
        <option value="136">Office of the Executive Secretariat</option>
        <option value="117">Office of the General Counsel</option>
        <option value="123">Office of the Inspector General</option>
        <option value="109">Office of the Secretary of Agriculture</option>
        <option value="113">Risk Management Agency</option>
        <option value="125">Rural Business-Cooperative Service</option>
        <option value="118">Rural Utilities Service</option>
      </optgroup>
      <optgroup label="Department Of Commerce">
        <option value="208">Bureau of Economic Analysis</option>
        <option value="219">Bureau of Industry and Security</option>
        <option value="210">Commerce, International Trade Administration</option>
        <option value="950">Department of Commerce - Agency Wide</option>
        <option value="207">Economic Development Administration</option>
        <option value="218">Economics and Statistics Administration</option>
        <option value="213">Minority Business Development Agency</option>
        <option value="212">National Institute of Standards and Technology</option>
        <option value="209">National Oceanic and Atmospheric Administration</option>
        <option value="215">National Technical Information Service</option>
        <option value="214">National Telecommunications and Information Administration</option>
        <option value="217">Office of the Inspector General</option>
        <option value="206">Office of the Secretary</option>
        <option value="211">Patent and Trademark Office</option>
        <option value="205">Technology Administration</option>
        <option value="216">U.S. Census Bureau</option>
      </optgroup>
      <optgroup label="Department of Defense">
        <option value="699">Armed Forces Radiobiology Research Institute</option><option value="244">Army and Air Force Exchange Service (nonappropriated fund)</option><option value="727">Business Transformation Agency</option><option value="248">Consolidated Metropolitan Technical Personnel Center</option><option value="918">Defense Acquisition University</option><option value="231">Defense Advanced Research Projects Agency</option><option value="251">Defense Career Management and Support Agency</option><option value="719">Defense Civilian Personnel Advisory Service</option><option value="242">Defense Commissary Agency</option><option value="228">Defense Contract Audit Agency</option><option value="252">Defense Contract Management Agency</option><option value="243">Defense Finance and Accounting Service</option><option value="249">Defense Health Agency</option><option value="245">Defense Human Resources Activity</option><option value="222">Defense Information Systems Agency</option><option value="223">Defense Intelligence Agency</option><option value="237">Defense Legal Services Agency</option><option value="225">Defense Logistics Agency</option><option value="760">Defense Media Activity</option><option value="700">Defense Microelectronics Activity</option><option value="1010">Defense Personnel Accounting Agency</option><option value="247">Defense Prisoner of War/Missing Personnel Office</option><option value="734">Defense Programs Support Activity</option><option value="224">Defense Security Cooperation Agency</option><option value="230">Defense Security Service</option><option value="707">Defense Technical Information Center</option><option value="241">Defense Technology Security Administration</option><option value="250">Defense Threat Reduction Agency</option><option value="951">Department of Defense - Agency Wide</option><option value="255">Department of Defense Counterintelligence Field Activity</option><option value="233">Department of Defense Education Activity</option><option value="711">Department of Defense Test Resource Management Center</option><option value="1">Department of the Air Force</option><option value="3">Department of the Army</option><option value="16">Department of the Navy</option><option value="253">Eastern Regional Support Center</option><option value="740">Joint Improvised Explosive Device Defeat Organization</option><option value="239">Missile Defense Agency</option><option value="686">National Defense University</option><option value="229">National Geospatial-Intelligence Agency</option><option value="240">National Security Agency/Central Security Service</option><option value="236">Office of Economics Adjustment</option><option value="238">Office of Inspector General</option><option value="220">Office of the Secretary of Defense</option><option value="221">Organization of the Joint Chiefs of Staff</option><option value="254">Pentagon Force Protection Agency</option><option value="701">Pentagon Renovation Program Office</option><option value="226">U.S. Court of Appeals for the Armed Forces</option><option value="850">U.S. Transportation Command</option><option value="847">Unified Combatant Command Headquarters</option><option value="232">Uniformed Services University of the Health Sciences</option><option value="702">Virginia Contracting Activity</option><option value="235">Washington Headquarters Services</option>
      </optgroup>
      <optgroup label="Department of Defense - Dept. of the Air Force">
        <option value="85">11th Wing</option><option value="1012">AF Installation and Mission Support</option><option value="52">Air Combat Command</option><option value="44">Air Education and Training Command</option><option value="731">Air Elements Defense Intelligence Agency</option><option value="963">Air Force Agency for Modeling/Simulation</option><option value="37">Air Force Audit Agency</option><option value="690">Air Force C2 &amp; Intelligence, Surveillance &amp; Reconnaissance</option><option value="103">Air Force Center for Engineer &amp; Environment</option><option value="1003">Air Force Civil Engineer Center</option><option value="713">Air Force Civilian Career Training</option><option value="35">Air Force Communications Agency (Historical)</option><option value="65">Air Force Cost Analysis Agency</option><option value="756">Air Force Cyber Command</option><option value="726">Air Force District of Washington</option><option value="767">Air Force Element OSD</option><option value="102">Air Force Elements</option><option value="81">Air Force Elements NORAD</option><option value="92">Air Force Elements, NATO</option><option value="90">Air Force Elements, U.S. Central Command</option><option value="691">Air Force Elements, U.S. European Command</option><option value="96">Air Force Elements, U.S. Joint Forces Command</option><option value="97">Air Force Elements, U.S. Pacific Command</option><option value="95">Air Force Elements, U.S. Southern Command</option><option value="91">Air Force Elements, U.S. Special Operations Command</option><option value="98">Air Force Elements, U.S. Strategic Command</option><option value="101">Air Force Elements, U.S. Transportation Command</option><option value="745">Air Force Financial Services</option><option value="104">Air Force Frequency Management Agency</option><option value="766">Air Force Global Strike Command</option><option value="74">Air Force Historical Research Agency</option><option value="32">Air Force Inspection Agency (FO)</option><option value="1000">Air Force Installation Contracting Agency</option><option value="36">Air Force Intelligence Analysis Agency</option><option value="49">Air Force Intelligence, Surveillance, &amp; Reconnaissance Agency</option><option value="69">Air Force Legal Operations Agency</option><option value="54">Air Force Logistics Management Agency</option><option value="57">Air Force Materiel Command</option><option value="88">Air Force Medical Operations Agency</option><option value="70">Air Force Medical Support Agency</option><option value="1011">Air Force Mortuary Affairs Operations</option><option value="64">Air Force National Security Emergency Preparedness</option><option value="715">Air Force Nuclear Weapons Agency</option><option value="38">Air Force Office of Special Investigations</option><option value="34">Air Force Operational Test and Evaluation Center</option><option value="72">Air Force Operations Group</option><option value="40">Air Force Personnel Center</option><option value="68">Air Force Personnel Operations Agency</option><option value="746">Air Force Petroleum Agency</option><option value="80">Air Force Program Executive Office</option><option value="764">Air Force Public Affairs Agency</option><option value="43">Air Force Reserve Personnel Center</option><option value="76">Air Force Review Boards Agency</option><option value="82">Air Force Safety Center</option><option value="83">Air Force Services Agency</option><option value="716">Air Force Special Operations Command</option><option value="77">Air Force Studies and Analyses Agency</option><option value="75">Air Force Technical Applications Center</option><option value="712">Air Force Wide Support Element</option><option value="108">Air Force, Special Operations Command</option><option value="55">Air Mobility Command</option><option value="89">Air National Guard</option><option value="73">Air National Guard Readiness Center</option><option value="106">Air National Guard Units (Title 32)</option><option value="1013">Defense Health Agency Air Force Element</option><option value="46">Headquarters, Air Force Reserve Command</option><option value="60">Headquarters, Air Force Space Command</option><option value="79">Headquarters, Air Weather Agency</option><option value="39">Headquarters, U.S. Air Force Security Forces Center</option><option value="59">HQ AF Flight Standards Agency</option><option value="765">HQ USAF and Support Elements</option><option value="717">HQ USAF Direct Support Element</option><option value="47">Immediate Office, Headquarters, USAF</option><option value="48">Pacific Air Forces</option><option value="913">U.S. Air Force - Agency Wide</option><option value="41">U.S. Air Force Academy</option><option value="42">U.S. Air Forces, Europe</option><option value="714">U.S. Northern Command</option><option value="107">U.S. Special Operations Command (ANG, Title 32)</option><option value="757">United States Africa Command</option>
      </optgroup>
      <optgroup label="Department of Defense - Dept. of the Army">
        <option value="157">1st Personnel Command</option><option value="154">21st Theater Sustainment Command (TSC)</option><option value="152">59th Ordnance Brigade</option><option value="147">Army Installation Management Command</option><option value="172">Army National Guard Units (Title 32)</option><option value="192">Army Tank-Automotive and Armament Command (TACOM)</option><option value="174">Eighth U.S. Army</option><option value="178">Field Operating Offices of the Office of the Secretary of the Army</option><option value="187">Headquarters, AMC</option><option value="188">Headquarters, Staff Support Activities, AMC</option><option value="180">HQDA Field Operating Agencies and Staff Support Agencies</option><option value="153">Immediate Office of the Commander-in-Chief of the U.S. Army</option><option value="165">Joint Activities</option><option value="182">Joint Services and Activities Supported by the Office, Secretary of the Army</option><option value="199">Materiel Acquisition Activities</option><option value="200">Materiel Acquisition Project Managers</option><option value="204">Materiel Readiness Activities</option><option value="181">Miscellaneous Field Operating Agencies</option><option value="150">Office of the Chief of Staff of the Army</option><option value="161">Office of the Chief of the National Guard Bureau</option><option value="177">Office of the Secretary of the Army</option><option value="159">Seventh Army Training Command</option><option value="168">Surgeon General</option><option value="189">Training Activities, AMC</option><option value="964">U.S. Army - Agency Wide</option><option value="965">U.S. Army Accession Command</option><option value="846">U.S. Army Acquisition Support Center</option><option value="1004">U.S. Army Africa/Southern European Task Force (USAFRAF/SETAF)</option><option value="191">U.S. Army Aviation and Missile Command</option><option value="748">U.S. Army Central</option><option value="196">U.S. Army Chemical Materials Activity</option><option value="193">U.S. Army Communications Electronics Command</option><option value="198">U.S. Army Contracting Command</option><option value="967">U.S. Army Corps of Engineers</option><option value="148">U.S. Army Criminal Investigation Command</option><option value="987">U.S. Army Cyber Command</option><option value="164">U.S. Army Element SHAPE</option><option value="160">U.S. Army Forces Command</option><option value="163">U.S. Army Health Services Command</option><option value="144">U.S. Army Intelligence and Security Command</option><option value="202">U.S. Army Joint Munitions Command</option><option value="167">U.S. Army Medical Command</option><option value="171">U.S. Army Military District of Washington</option><option value="203">U.S. Army Military Surface Deployment and Distribution Command</option><option value="677">U.S. Army Network Enterprise Technology Command/9th Army Signal Command</option><option value="749">U.S. Army North</option><option value="695">U.S. Army Research, Development and Engineering Command</option><option value="162">U.S. Army Reserve Command</option><option value="201">U.S. Army Security Assistance Command</option><option value="750">U.S. Army South</option><option value="185">U.S. Army Southern Command</option><option value="179">U.S. Army Space and Missile Defense Command/U. S. Army Forces Strategic Command</option><option value="197">U.S. Army Sustainment Command</option><option value="145">U.S. Army Test and Evaluation Command</option><option value="186">U.S. Army Training and Doctrine Command</option><option value="156">U.S. Army V Corps</option><option value="721">U.S. Army War College</option><option value="173">U.S. Army, Pacific</option><option value="166">U.S. Military Academy</option><option value="158">U.S. Military Community Activity, Heidelberg</option><option value="966">U.S. Military Entrance Processing Command</option><option value="183">U.S. Special Operations Command (Army)</option>
      </optgroup>
      <optgroup label="Department of Defense - Dept. of the Navy">
        <option value="435">Bureau of Naval Personnel</option>
        <option value="448">Chief of Naval Education and Training</option>
        <option value="678">Commander, Navy Installations</option>
        <option value="429">Immediate Office of the Chief of Naval Operations</option>
        <option value="426">Immediate Office of the Secretary of the Navy</option>
        <option value="443">Military Sealift Command</option>
        <option value="434">Naval Air Systems Command</option>
        <option value="688">Naval Education and Training Command</option>
        <option value="439">Naval Facilities Engineering Command</option>
        <option value="432">Naval Intelligence Command</option>
        <option value="433">Naval Medical Command</option>
        <option value="450">Naval Meteorology and Oceanography Command</option>
        <option value="453">Naval Reserve Force</option>
        <option value="437">Naval Sea Systems Command</option>
        <option value="451">Naval Security Group Command</option>
        <option value="454">Naval Special Warfare Command</option>
        <option value="436">Naval Supply Systems Command</option>
        <option value="428">Navy Field Offices</option>
        <option value="427">Navy Staff Offices</option>
        <option value="445">Navy Systems Management Activity</option>
        <option value="431">Office of Naval Research</option>
        <option value="430">Secretary of the Navy/Assistant for Administration (DON/AA)</option>
        <option value="444">Space and Naval Warfare Systems Command</option>
        <option value="442">Strategic Systems Programs Office</option>
        <option value="446">U.S. Atlantic Fleet, Commander in Chief</option>
        <option value="440">U.S. Marine Corps</option>
        <option value="447">U.S. Naval Forces, Europe</option>
        <option value="969">U.S. Navy - Agency Wide</option>
        <option value="452">U.S. Pacific Fleet, Commander in Chief</option>
        <option value="455">U.S. Special Operations Command (Navy)</option>
      </optgroup>
      <optgroup label="Department Of Education">
        <option value="316">Advisory Councils and Committees</option><option value="952">Department of Education - Agency Wide</option><option value="307">Federal Student Aid</option><option value="295">Immediate Office of the Secretary of Education</option><option value="310">Institute of Education Sciences</option><option value="317">National Assessment Governing Board</option><option value="315">National Institute for Literacy</option><option value="297">Office for Civil Rights</option><option value="723">Office of Communications and Outreach</option><option value="311">Office of Elementary and Secondary Education</option><option value="312">Office of English Language Acquisition</option><option value="313">Office of Innovation and Improvement</option><option value="299">Office of Inspector General</option><option value="304">Office of Intergovernmental and Interagency Affairs</option><option value="303">Office of Legislation and Congressional Affairs</option><option value="306">Office of Management</option><option value="733">Office of Planning, Evaluation and Policy Development</option><option value="308">Office of Postsecondary Education</option><option value="309">Office of Safe and Drug-Free Schools</option><option value="301">Office of Special Education and Rehabilitative Services</option><option value="305">Office of the Chief Financial Officer</option><option value="302">Office of the Chief Information Officer</option><option value="296">Office of the Deputy Secretary of Education</option><option value="300">Office of the General Counsel</option><option value="298">Office of the Under Secretary</option><option value="314">Office of Vocational and Adult Education</option>
      </optgroup>
      <optgroup label="Department Of Energy">
        <option value="953">Bonneville Power Administration</option><option value="318">Department of Energy</option><option value="993">Federal Energy Regulatory Commission (FERC)</option><option value="912">National Nuclear Security Administration</option><option value="747">Southwestern Power Administration</option><option value="739">Western Area Power Administration</option>
      </optgroup>
      <optgroup label="Department Of Health And Human Services">
        <option value="352">Administration for Children and Families</option><option value="341">Administration for Community Living</option><option value="344">Agency for Healthcare Research and Quality</option><option value="346">Agency for Toxic Substances and Disease Registry</option><option value="350">Centers for Disease Control and Prevention</option><option value="351">Centers for Medicare &amp; Medicaid Services</option><option value="954">Department of Health and Human Services - Agency Wide</option><option value="347">Food and Drug Administration</option><option value="345">Health Resources and Services Administration</option><option value="348">Indian Health Service</option><option value="349">National Institutes of Health</option><option value="1008">Office of Inspector General</option><option value="342">Office of the Assistant Secretary of Health</option><option value="339">Office of the Secretary of Health and Human Services</option><option value="340">Program Support Center</option><option value="343">Substance Abuse and Mental Health Services Administration</option>
      </optgroup>
      <optgroup label="Department Of Homeland Security">
        <option value="354">Citizenship and Immigration Services</option><option value="361">Customs and Border Protection</option><option value="955">Department of Homeland Security - Agency Wide</option><option value="353">DHS Headquarters</option><option value="365">Domestic Nuclear Detection Office</option><option value="364">Federal Emergency Management Agency</option><option value="362">Federal Law Enforcement Training Centers</option><option value="359">Immigration and Customs Enforcement</option><option value="363">National Protection and Programs Directorate</option><option value="357">Office of the Inspector General</option><option value="369">Science and Technology Directorate</option><option value="360">Transportation Security Administration</option><option value="355">U.S. Coast Guard</option><option value="356">U.S. Secret Service</option>
      </optgroup>
      <optgroup label="Department Of Housing And Urban Development">
        <option value="383">Assistant Secretary for Community Planning and Development</option><option value="388">Assistant Secretary for Congressional and Intergovernmental Relations</option><option value="384">Assistant Secretary for Fair Housing and Equal Opportunity</option><option value="392">Assistant Secretary for Housing-Federal Housing Commissioner</option><option value="397">Assistant Secretary for Policy Development and Research</option><option value="401">Assistant Secretary for Public Affairs</option><option value="395">Assistant Secretary for Public and Indian Housing</option><option value="389">Center for Faith-Based and Community Initiatives</option><option value="956">Department of Housing and Urban Development - Agency Wide</option><option value="398">Government National Mortgage Association (Ginnie Mae)</option><option value="399">Office of Departmental Equal Employment Opportunity</option><option value="387">Office of Departmental Operations and Coordination</option><option value="400">Office of Disaster Management and National Security</option><option value="390">Office of Field Policy and Management</option><option value="382">Office of General Counsel</option><option value="391">Office of Healthy Homes and Lead Hazard Control</option><option value="386">Office of Inspector General</option><option value="402">Office of Strategic Planning and Management</option><option value="403">Office of Sustainable Housing and Communities</option><option value="385">Office of the Chief Financial Officer</option><option value="381">Office of the Chief Human Capital Officer</option><option value="396">Office of the Chief Information Officer</option><option value="393">Office of the Chief Procurement Officer</option><option value="380">Office of the Secretary of Housing and Urban Development</option><option value="376">Office of the Senior Coordinator for Great Plains</option><option value="372">Office of the Senior Coordinator for Mid-Atlantic</option><option value="374">Office of the Senior Coordinator for Midwest</option><option value="370">Office of the Senior Coordinator for New England</option><option value="371">Office of the Senior Coordinator for New York/New Jersey</option><option value="379">Office of the Senior Coordinator for Northwest/Alaska</option><option value="378">Office of the Senior Coordinator for Pacific/Hawaii</option><option value="377">Office of the Senior Coordinator for Rocky Mountains</option><option value="373">Office of the Senior Coordinator for Southeast/Caribbean</option><option value="375">Office of the Senior Coordinator for Southwest</option>
      </optgroup>
      <optgroup label="Department Of Justice">
        <option value="275">Bureau of Alcohol, Tobacco, Firearms, and Explosives</option>
        <option value="274">Community Relations Service</option>
        <option value="957">Department of Justice - Agency Wide</option>
        <option value="267">Drug Enforcement Administration</option>
        <option value="273">Executive Office for Immigration Review</option>
        <option value="270">Executive Office for U.S. Attorneys and the Office of the U.S. Attorneys</option>
        <option value="265">Federal Bureau of Investigation</option>
        <option value="266">Justice, Bureau of Prisons/Federal Prison System</option>
        <option value="271">Justice, Office of the Inspector General</option>
        <option value="272">Justice, U.S. Trustee Program</option>
        <option value="268">Office of Justice Programs</option>
        <option value="257">Offices, Boards and Divisions</option>
        <option value="269">U.S. Marshals Service</option>
      </optgroup>
      <optgroup label="Department Of Labor">
        <option value="278">Bureau of International Labor Affairs</option><option value="285">Bureau of Labor Statistics</option><option value="958">Department of Labor - Agency Wide</option><option value="290">Employee Benefits Security Administration</option><option value="283">Employment and Training Administration</option><option value="282">Employment Standards Administration</option><option value="286">Mine Safety and Health Administration</option><option value="291">Occupational Safety and Health Administration</option><option value="279">Office of Congressional and Intergovernmental Affairs</option><option value="281">Office of Disability Employment Policy</option><option value="908">Office of Federal Contract Compliance Programs</option><option value="909">Office of Labor-Management Standards</option><option value="288">Office of Public Affairs</option><option value="277">Office of the Assistant Secretary for Administration and Management</option><option value="289">Office of the Assistant Secretary for Policy</option><option value="280">Office of the Chief Financial Officer</option><option value="284">Office of the Inspector General</option><option value="276">Office of the Secretary of Labor</option><option value="292">Office of the Solicitor</option><option value="910">Office of Workers’ Compensation Programs</option><option value="293">Veterans Employment and Training Services</option><option value="907">Wage and Hour Division</option><option value="294">Women's Bureau</option>
      </optgroup>
      <optgroup label="Department Of State">
        <option value="458">Department of State - Agency Wide</option>
        <option value="962">Eastern Regional Personnel Center</option>
        <option value="961">Materiel Acquisition Support Center</option>
        <option value="959">Metropolitan Technical Support Center</option>
        <option value="960">Northern Regional Personnel Center</option>
      </optgroup>
      <optgroup label="Department Of The Interior">
        <option value="405">Bureau of Land Management</option>
        <option value="929">Bureau of Ocean Energy Management</option>
        <option value="413">Bureau of Ocean Energy Management, Regulation, and Enforcement</option>
        <option value="407">Bureau of Reclamation</option>
        <option value="928">Bureau of Safety and Environmental Enforcement</option>
        <option value="968">Department of Interior - Agency Wide</option>
        <option value="408">Geological Survey</option>
        <option value="406">Interior, Bureau of Indian Affairs</option>
        <option value="410">Interior, US Fish and Wildlife Service</option>
        <option value="758">National Indian Gaming Commission</option>
        <option value="409">National Park Service</option>
        <option value="412">Office of Surface Mining Reclamation and Enforcement</option>
        <option value="414">Office of the Inspector General</option>
        <option value="404">Office of the Secretary of the Interior</option>
        <option value="411">Office of the Solicitor</option>
      </optgroup>
      <optgroup label="Department Of The Treasury">
        <option value="473">Alcohol and Tobacco Tax and Trade Bureau</option><option value="481">Bureau of Engraving and Printing</option><option value="1007">Bureau of the Fiscal Service</option><option value="478">Bureau of the Fiscal Service (BPD)</option><option value="477">Bureau of the Fiscal Service (FMS)</option><option value="971">Department of Treasury - Agency Wide</option><option value="475">Internal Revenue Service</option><option value="476">Office of Inspector General</option><option value="482">Office of the Comptroller of the Currency</option><option value="483">Office of the Inspector General for Tax Administration</option><option value="769">Office of the Special Inspector General for the Troubled Asset Relief Program (SIGTARP)</option><option value="472">Office of Thrift Supervision</option><option value="474">Treasury, Departmental Offices</option><option value="480">Treasury, Financial Crimes Enforcement Network</option><option value="479">U.S. Mint</option>
      </optgroup>
      <optgroup label="Department Of Transportation">
        <option value="970">Department of Transportation - Agency Wide</option><option value="460">Federal Aviation Administration</option><option value="461">Federal Highway Administration</option><option value="471">Federal Motor Carrier Safety Administration</option><option value="462">Federal Railroad Administration</option><option value="464">Federal Transit Administration</option><option value="468">Maritime Administration</option><option value="465">National Highway Traffic Safety Administration</option><option value="467">Office of Inspector General</option><option value="459">Office of the Secretary of Transportation</option><option value="470">Pipeline and Hazardous Materials Safety Administration</option><option value="466">Research and Innovative Technology Administration</option><option value="463">Saint Lawrence Seaway Development Corporation</option><option value="469">Surface Transportation Board</option><option value="696">Transportation Administrative Service Center</option>
      </optgroup>
      <optgroup label="Department Of Veterans Affairs">
        <option value="493">Assistant Secretary for Diversity and Inclusion</option>
        <option value="492">Assistant Secretary for Human Resources Management</option>
        <option value="486">Board of Veterans Appeals</option>
        <option value="991">Dean for VA Learning University</option>
        <option value="753">Department of Veterans Affairs - Agency Wide</option>
        <option value="500">Deputy Assistant Secretary for Acquisition and Logistics</option>
        <option value="494">Deputy Assistant Secretary for Administration</option>
        <option value="498">Deputy Assistant Secretary for Budget</option>
        <option value="511">Deputy Assistant Secretary for Congressional Affairs</option>
        <option value="496">Deputy Assistant Secretary for Corporate Senior Executive Management</option>
        <option value="738">Deputy Assistant Secretary for Emergency Management</option>
        <option value="499">Deputy Assistant Secretary for Finance</option>
        <option value="502">Deputy Assistant Secretary for Information and Technology</option>
        <option value="508">Deputy Assistant Secretary for Intergovernmental Affairs</option>
        <option value="990">Deputy Assistant Secretary for Labor Management Relations</option>
        <option value="708">Deputy Assistant Secretary for Legislative Affairs</option>
        <option value="495">Deputy Assistant Secretary for Office of Resolution Management</option>
        <option value="505">Deputy Assistant Secretary for Planning and Evaluation</option><option value="504">Deputy Assistant Secretary for Program and Data Analysis</option><option value="509">Deputy Assistant Secretary for Public Affairs</option><option value="737">Deputy Assistant Secretary for Security and Law Enforcement</option><option value="709">Deputy Assistant Secretary for Security Preparedness</option><option value="487">General Counsel</option><option value="510">Immediate Office of the Assistant Secretary for Congressional and Legislative Affairs</option><option value="490">Immediate Office of the Assistant Secretary for Human Resources and Administration</option><option value="501">Immediate Office of the Assistant Secretary for Information and Technology</option><option value="497">Immediate Office of the Assistant Secretary for Management</option><option value="736">Immediate Office of the Assistant Secretary for Operations, Security, and Preparedness</option><option value="503">Immediate Office of the Assistant Secretary for Policy and Planning</option><option value="506">National Center for Veteran Analysis and Statistics</option><option value="507">Office of the Assistant Secretary for Public and Intergovernmental Affairs</option><option value="484">Office of the Secretary</option><option value="996">Veteran Employment Services Office</option><option value="488">Veterans Affairs, Inspector General</option><option value="513">Veterans Affairs, National Cemetery Administration</option><option value="514">Veterans Affairs, Veterans Health Administration</option><option value="512">Veterans Benefits Administration</option>
      </optgroup>
      <optgroup label="Executive Office of the President">
        <option value="552">Council of Economic Advisers</option>
        <option value="569">Executive Residence at the White House</option>
        <option value="989">National Commission on Fiscal Responsibility and Reform</option>
        <option value="623">National Security Council</option>
        <option value="562">Office of Administration</option>
        <option value="547">Office of Management and Budget</option>
        <option value="632">Office of National Drug Control Policy</option>
        <option value="560">Office of Policy Development</option>
        <option value="649">Office of Science and Technology Policy</option>
        <option value="972">Office of the Former President</option>
        <option value="654">Office of the President</option>
        <option value="973">Office of the President Elect</option>
        <option value="648">Office of the U.S. Trade Representative</option>
        <option value="653">White House Office</option>
      </optgroup>
      <optgroup label="General Services Administration">
        <option value="326">Civilian Board of Contract Appeals</option>
        <option value="730">Federal Acquisition Service</option>
        <option value="741">General Services Administration - Agency Wide</option>
        <option value="742">GSA, Office of Mission Assurance</option>
        <option value="320">Immediate Office of the Administrator</option>
        <option value="1001">Office of Administrative Services</option>
        <option value="338">Office of Childcare</option>
        <option value="329">Office of Citizen Services and Innovative Technologies</option>
        <option value="322">Office of Civil Rights</option>
        <option value="744">Office of Communications and Marketing</option>
        <option value="330">Office of Congressional and Intergovernmental Affairs</option>
        <option value="325">Office of General Counsel</option>
        <option value="335">Office of Governmentwide Policy</option>
        <option value="327">Office of Human Resources Management</option>
        <option value="328">Office of Inspector General</option>
        <option value="323">Office of Small Business Utilization</option>
        <option value="705">Office of the Chief Acquisition Officer</option>
        <option value="324">Office of the Chief Financial Officer</option>
        <option value="337">Office of the Chief Information Officer</option>
        <option value="1015">Office of the Customer Experience</option>
        <option value="332">Offices of the Regional Administrators</option>
        <option value="321">Public Buildings Service</option>
      </optgroup>
      <optgroup label="Judicial Branch">
        <option value="601">Administrative Office of the U.S. Courts</option>
        <option value="974">Judicial Branch - Agency Wide</option>
        <option value="768">Supreme Court of the United States</option>
        <option value="998">U. S. Sentencing Commission</option>
        <option value="600">U.S. Courts</option>
        <option value="614">U.S. Tax Court</option>
      </optgroup>
      <optgroup label="Legislative Branch">
        <option value="666">Abraham Lincoln Bicentennial Commission</option>
        <option value="603">Architect of the Capitol</option>
        <option value="604">Botanic Garden</option>
        <option value="660">Commission on Security and Cooperation in Europe</option>
        <option value="664">Commission on the People's Republic of China</option>
        <option value="606">Congressional Budget Office</option>
        <option value="663">Dwight D. Eisenhower Memorial Commission</option>
        <option value="980">Financial Crisis Inquiry Commission</option>
        <option value="608">Government Accountability Office</option>
        <option value="612">Government Publishing Office</option>
        <option value="610">House of Representatives</option>
        <option value="613">John C. Stennis Center for Public Service Training and Development</option>
        <option value="997">Legislative Branch - Agency Wide</option>
        <option value="605">Library of Congress</option>
        <option value="658">Medicare Payment Advisory Commission</option>
        <option value="656">Office of Compliance</option>
        <option value="992">Ronald Reagan Centennial Commission</option>
        <option value="611">U.S. Capitol Police</option>
        <option value="661">U.S. Commission on International Religious Freedom</option>
        <option value="655">U.S. Court of Appeals for Veterans Claims</option>
        <option value="662">United States-China Economic and Security Review Commission</option>
      </optgroup>
      <optgroup label="National Aeronautics and Space Administration">
        <option value="416">Ames Research Center</option>
        <option value="419">Armstrong Flight Research Center</option>
        <option value="421">George C. Marshall Space Flight Center</option>
        <option value="420">Goddard Space Flight Center</option>
        <option value="415">Headquarters, NASA</option>
        <option value="422">John C. Stennis Space Center</option>
        <option value="425">John F. Kennedy Space Center</option>
        <option value="417">John Glenn Research Center at Lewis Field</option>
        <option value="418">Langley Research Center</option>
        <option value="423">Lyndon B. Johnson Space Center</option>
        <option value="975">NASA - Agency Wide</option>
        <option value="424">Space Station Program Office</option>
      </optgroup>
      <optgroup label="National Foundation on the Arts and the Humanities">
        <option value="976">Foundation on the Arts and the Humanities - Agency Wide</option>
        <option value="534">Institute of Museum and Library Services</option>
        <option value="532">National Endowment for the Arts</option>
        <option value="533">National Endowment for the Humanities</option>
      </optgroup>
      <optgroup label="Non-Federal Civilian Customers">
        <option value="942">Amtrak - Office of Inspector General</option>
        <option value="999">Public Defender Service for the District of Columbia</option>
      </optgroup>
      <optgroup label="Other Agencies and Independent Organizations">
        <option value="938">Administrative Conference of the United States</option>
        <option value="596">Advisory Council on Historic Preservation</option>
        <option value="537">African Development Foundation</option>
        <option value="994">Agency System Test</option>
        <option value="531">American Battle Monuments Commission</option>
        <option value="538">Appalachian Regional Commission</option>
        <option value="548">Architectural and Transportation Barriers Compliance Board</option>
        <option value="540">Arctic Research Commission</option>
        <option value="457">Armed Forces Retirement Home</option>
        <option value="585">Barry Goldwater Scholarship and Excellence in Education Foundation</option>
        <option value="598">Broadcasting Board of Governors</option>
        <option value="979">Centennial of Flight Commission</option>
        <option value="554">Central Intelligence Agency</option>
        <option value="573">Chemical Safety and Hazard Investigation Board</option>
        <option value="550">Christopher Columbus Fellowship Foundation</option>
        <option value="544">Commission for the Preservation of America’s Heritage Abroad</option>
        <option value="553">Commission of Fine Arts</option>
        <option value="551">Commission on Civil Rights</option>
        <option value="567">Commission on Executive, Legislative, and Judicial Salaries</option>
        <option value="930">Commission on the Prevention of Weapons of Mass Destruction Proliferation and Terrorism</option>
        <option value="594">Committee for Purchase from People Who Are Blind or Severely Disabled</option>
        <option value="556">Commodity Futures Trading Commission</option>
        <option value="944">Consumer Financial Protection Bureau</option>
        <option value="639">Consumer Product Safety Commission</option>
        <option value="602">Corporation for National and Community Service</option>
        <option value="937">Council of the Inspectors General on Integrity and Efficiency</option>
        <option value="542">Defense Nuclear Facilities Safety Board</option>
        <option value="559">Delta Regional Authority</option>
        <option value="735">Denali Commission</option>
        <option value="995">District of Columbia Courts</option>
        <option value="689">Election Assistance Commission</option>
        <option value="565">Environmental Protection Agency</option>
        <option value="563">Equal Employment Opportunity Commission</option>
        <option value="561">Export-Import Bank of the United States</option>
        <option value="575">Farm Credit Administration</option>
        <option value="574">Farm Credit System Insurance Corporation</option>
        <option value="570">Federal Communications Commission</option>
        <option value="571">Federal Deposit Insurance Corporation</option>
        <option value="607">Federal Election Commission</option>
        <option value="572">Federal Financial Institutions Examination Council</option>
        <option value="981">Federal Housing Finance Agency</option>
        <option value="539">Federal Labor Relations Authority</option>
        <option value="616">Federal Maritime Commission</option>
        <option value="576">Federal Mediation and Conciliation Service</option>
        <option value="636">Federal Mine Safety and Health Review Commission</option>
        <option value="988">Federal Reserve System--Board Of Governors</option>
        <option value="634">Federal Retirement Thrift Investment Board</option>
        <option value="581">Federal Trade Commission</option>
        <option value="1006">Gulf Coast Ecosystem Restoration Council</option>
        <option value="545">Illinois and Michigan Canal National Heritage Corridor Commission</option>
        <option value="599">Inter-American Foundation</option>
        <option value="591">International Boundary and Water Commission: United States and Mexico</option>
        <option value="592">International Boundary Commission: United States and Canada</option>
        <option value="651">Japan-United States Friendship Commission</option>
        <option value="643">John F. Kennedy Center for the Performing Arts</option>
        <option value="698">Legal Service Corporation</option>
        <option value="615">Marine Mammal Commission</option>
        <option value="940">Medicaid and CHIP Payment and Access Commission</option>
        <option value="541">Merit Systems Protection Board</option>
        <option value="694">Millennium Challenge Corporation</option>
        <option value="564">Morris K. Udall Scholarship and Excellence in National Environmental Policy Foundation</option>
        <option value="676">Multi-agency</option>
        <option value="622">National Archives and Records Administration</option>
        <option value="621">National Capital Planning Commission</option>
        <option value="558">National Commission on Libraries and Information Science</option>
        <option value="618">National Council on Disability</option>
        <option value="557">National Credit Union Administration</option>
        <option value="640">National Gallery of Art</option>
        <option value="619">National Labor Relations Board</option>
        <option value="620">National Mediation Board</option>
        <option value="617">National Science Foundation</option>
        <option value="646">National Transportation Safety Board</option>
        <option value="939">Northern Border Regional Commission</option>
        <option value="624">Nuclear Regulatory Commission</option>
        <option value="549">Nuclear Waste Technical Review Board</option>
        <option value="626">Occupational Safety and Health Review Commission</option>
        <option value="586">Office of Government Ethics</option>
        <option value="633">Office of Navajo and Hopi Indian Relocation</option>
        <option selected="selected" value="625">Office of Personnel Management</option>
        <option value="582">Office of Special Counsel</option>
        <option value="724">Office of the Director of National Intelligence</option>
        <option value="743">Office of the Federal Coordinator for Alaska Natural Gas Transportation Projects</option>
        <option value="982">Office of the Inspector General for the Federal Housing Finance Agency</option>
        <option value="761">Office of the Inspector General, USPS</option>
        <option value="627">Office of the Vice President</option>
        <option value="584">Overseas Private Investment Corporation</option>
        <option value="631">Peace Corps</option>
        <option value="543">Pension Benefit Guaranty Corporation</option>
        <option value="629">Postal Regulatory Commission</option>
        <option value="587">Presidio Trust</option>
        <option value="1002">Privacy and Civil Liberties Oversight Board</option>
        <option value="732">Public Interest Declassification Board</option>
        <option value="628">Public International Organization</option>
        <option value="635">Railroad Retirement Board</option>
        <option value="771">Recovery Act Accountability and Transparency Board</option>
        <option value="638">Securities and Exchange Commission</option>
        <option value="644">Selective Service System</option>
        <option value="637">Small Business Administration</option>
        <option value="642">Smithsonian Institution </option>
        <option value="645">Social Security Administration</option>
        <option value="650">Tennessee Valley Authority</option>
        <option value="568">Trade and Development Agency</option>
        <option value="536">U.S. Agency for International Development</option>
        <option value="595">U.S. Holocaust Memorial Museum</option>
        <option value="647">U.S. International Trade Commission</option>
        <option value="630">U.S. Postal Service</option>
        <option value="652">Utah Reclamation Mitigation and Conservation Commission</option>
        <option value="588">Valles Caldera Trust</option>
        <option value="590">Vietnam Education Foundation</option>
        <option value="589">White House Commission on the National Moment of Remembrance</option>
        <option value="641">Woodrow Wilson International Center for Scholars</option>
        <option value="1014">World War 1 Centennial Commission</option>
      </optgroup>
    </select>
  </form>
</div>
<div class="usa-accordion-bordered usa-accordion-docs">
  <button class="usa-button-unstyled usa-accordion-button"
      aria-expanded="true" aria-controls="collapsible-0">
    Documentation
  </button>
  <div id="collapsible-0" aria-hidden="false" class="usa-accordion-content">
    <h4 class="usa-heading">Usability</h4>
    <h5>When to use</h5>
    <ul class="usa-content-list">
      <li>Use the chosen plugin when there are more than 25 options in a dropdown.</li>
    </ul>
    <h5>When to consider something else</h5>
    <ul class="usa-content-list">
      <li>When the select menu is 25 items or less use of the chosen plugin is not necessary.</li>
    </ul>
  </div>
</div>

<h2 class="usa-heading" id="labels">Labels</h2>
<p class="usa-font-lead">
  Labels are simple text descriptions of data being requested and are found in close proximity to a form input that requests that data.
</p>

<div class="usa-accordion-bordered usa-accordion-docs">
  <button class="usa-button-unstyled usa-accordion-button"
      aria-expanded="true" aria-controls="collapsible-0">
    Documentation
  </button>
  <div id="collapsible-0" aria-hidden="false" class="usa-accordion-content">
    <h4 class="usa-heading">Usability</h4>
    <h5>Guidance</h5>
    <ul>
      <li>Labels are concise text that describes the data being requested by a form input.</li>
      <li>
        Labels should appear directly above form controls as seen in the <a href="https://playbook.cio.gov/designstandards/form-controls/">U.S. Web Design Standards</a>.
      </li>
      <li>Labels do NOT end in a colon.</li>
    </ul>
  </div>
</div>

<h6 id="usajobs-form-field-indicator-documentation" class="usa-heading-alt">
  Required/Optional Field Indicator
</h6>
<div class="preview">
  <label for="first-name">First name <span class="usa-additional_text">Optional</span></label>
  <input id="first-name" name="first-name" type="text">
  <label for="last-name">Last name <span class="usa-additional_text">Required</span></label>
  <input id="last-name" name="last-name" type="text" required="" aria-required="true">
</div>

<div class="usa-accordion-bordered usa-accordion-docs">
  <button class="usa-button-unstyled usa-accordion-button"
      aria-expanded="true" aria-controls="collapsible-0">
    Documentation
  </button>
  <div id="collapsible-0" aria-hidden="false" class="usa-accordion-content">
    <h4 class="usa-heading">Usability</h4>

    <h5>When to use</h5>
    <ul class="usa-content-list">
      <li>When the majority of form fields are either required or optional and thus specific fields must be identified as the opposite (optional or required).</li>
      <li>In place of a red asterisk.</li>
    </ul>

    <h5>When to consider something else</h5>
    <ul class="usa-content-list">
      <li>If all fields are required or optional consider the <a href="#usajobs-form-legend-documentation">form legend</a> to communicate that to the user.</li>
    </ul>
  </div>
</div>

<h6 id="usajobs-form-legend-documentation" class="usa-heading-alt">Legend</h6>
<div class="preview">
  <form name="example" aria-labelled-by="usajobs-form-heading-0" class="usajobs-form">
    <h2 id="usajobs-form-heading-0" class="usajobs-form__title">
      [Form Title]
      <span class="usajobs-form__legend">All fields are required</span>
    </h2>
    <fieldset>
      <label for="first-name">First name</label>
      <input id="first-name" name="first-name" type="text">
      <label for="last-name">Last name</label>
      <input id="last-name" name="last-name" type="text">
    </fieldset>
  </form>
</div>
<div class="usa-accordion-bordered usa-accordion-docs">
  <button class="usa-button-unstyled usa-accordion-button"
      aria-expanded="true" aria-controls="collapsible-0">
    Documentation
  </button>
  <div id="collapsible-0" aria-hidden="false" class="usa-accordion-content">
    <h4 class="usa-heading">Usability</h4>
    <h5>When to use</h5>
    <ul class="usa-content-list">
      <li>When all fields for a form are required use the text "All fields are required".</li>
      <li>When all fields for a form are optional use the text "All fields are optional".</li>
      <li>When most of the form fields are required use the text "All fields are required unless otherwise noted" in conjunction with the <a href="#usajobs-form-field-indicator-documentation">Optional Field Indicator</a> to indicate the optional fields.</li>
    </ul>
    <h5>When not to use</h5>
    <ul class="usa-content-list">
      <li>The form legend may be omitted in cases where the form is extremely short or the fields are obviously required. For example, a form that consists of one checkbox or a sign in form.</li>
      <li>When most of the form fields are optional omit the legend and use the <a href="#usajobs-form-field-indicator-documentation">Required Field Indicator</a> to indicate the required fields.</li>
    </ul>
  </div>
</div>

<h2 class="usa-heading" id="validation">Validation</h2>
<p class="usa-font-lead">
  Styling, timing, and alert style guidance.
</p>
<div class="usa-accordion-bordered usa-accordion-docs">
  <button class="usa-button-unstyled usa-accordion-button"
      aria-expanded="true" aria-controls="collapsible-0">
    Documentation
  </button>
  <div id="collapsible-0" aria-hidden="false" class="usa-accordion-content">
    <h4 class="usa-heading">Visual</h4>
    <ul class="usa-content-list">
      <li>Input boxes and dropdowns in error should be <a href="https://standards.usa.gov/form-controls/#text-inputs">outlined in red</a>/</li>
      <li>A <a href="https://standards.usa.gov/form-controls/#text-inputs">vertical red bar</a> should run along the left side of all failed form fields. The red bar should run the length of each individual question, including the radio buttons or answer options.</li>
      <li>Input boxes and dropdowns no longer in error should be outlined in green.</li>
      <li>The <a href="https://standards.usa.gov/form-controls/#text-inputs">styling should follow the U.S. Design Standards</a>.</li>
    </ul>
    <h4 class="usa-heading">Labels</h4>
    <ul class="usa-content-list">
      <li>When a field is required the help text "This field is required" should be placed directly under the field label or required question.</li>
      <li>The help text related to character issues or unmet requirements should use the text "This field" rather than the actual field name.</li>
    </ul>
    <h4 class="usa-heading">Timing</h4>
    <h5>Errors</h5>
    <ul class="usa-content-list">
      <li>Inline error validation should occur on all required input fields and dropdowns. The error styling should be triggered after the field has lost focus (the user has clicked or tabbed away from the input field without meeting field requirements).</li>
      <li>Do not display an alert at the top of the page when using inline error validation.</li>
      <li>Inline error validation should also occur if a user enters a character that does not meet the requirements of the field. For example, entering a number in the first name text input. This should occur for optional and required fields.</li>
    </ul>

    <h5>Success</h5>
    <ul class="usa-content-list">
      <li>Success styling should be triggered when a form error (red styling) is corrected. The success validation should appear once the user clicks or tabs out of the input and meets the basic requirements of that field.</li>
      <li>Success styling should be removed when the page is saved.</li>
    </ul>

    <h5>Dependent fields</h5>
    <ul class="usa-content-list">
      <li>
        When you have dependent fields (i.e. Start Date & End date) you should not receive an error on either field until the user leaves the set (both fields). After the set has been left, error styling should be triggered on one or both of the fields.
      </li>
    </ul>

    <h4 class="usa-heading">Error alert</h4>
    <ul class="usa-content-list">
      <li>If a user saves a form with known errors or skipped required fields, reload the page with the errors styling displayed and an alert at the top of the page.</li>
      <li>The alert should appear above the form but not within the form.</li>
      <li>The alert should read "We can’t save your information because there are one or more errors. Please correct the information below and then save your changes."</li>
    </ul>
  </div>
</div>

<h2 class="usa-heading" id="layout">Alternative Layouts</h2>
<div class="preview">
  <h6 id="usajobs-form-legend-documentation" class="usa-heading-alt">Horizontal layout</h6>
  <form name="layout-example" class="usajobs-form">
    <div class="usajobs-search-save__scroll-container">
      <div class="usajobs-search-save__body" id="search-save-body">
        <h3 class="usajobs-search-save__title">Save search</h3>
        <fieldset class="usajobs-fieldset--horizontal">
          <div class="usajobs-fieldset--horizontal__col usajobs-search-save__input">
            <label for="search-save-name">
              Name
              <span class="usa-additional_text">Required</span>
            </label>
            <input name="search-save-name" class="usajobs-search-save__name" type="text" value="" autocomplete="false" required aria-required="true" />
          </div>
          <div class="usajobs-fieldset--horizontal__col-right usajobs-search-save__select">
            <label for="search-save-frequency">
              <i class="fa fa-bell usajobs-search-save__freq-icon"></i> Notification frequency
            </label>
            <select name="search-save-frequency" class="usajobs-search-save__frequency">
              <option>Daily</option>
              <option>Weekly</option>
              <option>Monthly</option>
              <option>Never</option>
            </select>
          </div>
          <div class="usajobs-fieldset--horizontal__row usajobs-search-save__button">
            <button id="search-save-cta" class="usa-button usa-button-primary usajobs-search-save__create">Save</button>
            <button class="usa-button usa-button-outline usajobs-search-save__cancel" data-behavior="search-save.close" aria-controls="search-save">Cancel</button>
          </div>
        </fieldset>
      </div>
    </div>
  </form>

  <h6 id="usajobs-form-legend-documentation" class="usa-heading-alt">Horizontal layout with validation error -- Left</h6>
  <form name="layout-example" class="usajobs-form">
    <div class="usajobs-search-save__scroll-container">
      <div class="usajobs-search-save__body" id="search-save-body">
        <h3 class="usajobs-search-save__title">Save search</h3>
        <fieldset class="usajobs-fieldset--horizontal">
          <div class="usajobs-fieldset--horizontal__col usa-input-error">
            <label for="search-save-name" class="usa-input-error-label" for="search-save-name">
              Name
              <span class="usa-additional_text">Required</span>
            </label>
            <input name="search-save-name" class="usajobs-search-save__name" type="text" value="" autocomplete="false" required aria-required="true" aria-described-by="input-error-message" />
            <span class="usa-input-error-message" id="input-error-message" role="alert">
              This field is required
            </span>
          </div>
          <div class="usajobs-fieldset--horizontal__col-right">
            <label for="search-save-frequency">
              <i class="fa fa-bell usajobs-search-save__freq-icon"></i> Notification frequency
            </label>
            <select name="search-save-frequency" class="usajobs-search-save__frequency">
              <option>Daily</option>
              <option>Weekly</option>
              <option>Monthly</option>
              <option>Never</option>
            </select>
          </div>
          <div class="usajobs-fieldset--horizontal__row usajobs-search-save__button">
            <button id="search-save-cta" class="usa-button usa-button-primary usajobs-search-save__create">Save</button>
            <button class="usa-button usa-button-outline usajobs-search-save__cancel" data-behavior="search-save.close" aria-controls="search-save">Cancel</button>
          </div>
        </fieldset>
      </div>
    </div>
  </form>

  <h6 id="usajobs-form-legend-documentation" class="usa-heading-alt">Horizontal layout with validation error -- Right</h6>
  <form name="layout-example" class="usajobs-form">
    <div class="usajobs-search-save__scroll-container">
      <div class="usajobs-search-save__body" id="search-save-body">
        <h3 class="usajobs-search-save__title">Save search</h3>
        <fieldset class="usajobs-fieldset--horizontal">
          <div class="usajobs-fieldset--horizontal__col">
            <label for="search-save-name" class="" for="search-save-name">
              Name
              <span class="usa-additional_text">Required</span>
            </label>
            <input name="search-save-name" class="usajobs-search-save__name" type="text" value="" autocomplete="false" required aria-required="true" aria-described-by="input-error-message" />
          </div>
          <div class="usajobs-fieldset--horizontal__col-right usa-input-error">
            <label for="search-save-frequency" class="usa-input-error-label">
              <i class="fa fa-bell usajobs-search-save__freq-icon"></i> Notification frequency
            </label>
            <select name="search-save-frequency" class="usajobs-search-save__frequency">
              <option>Daily</option>
              <option>Weekly</option>
              <option>Monthly</option>
              <option>Never</option>
            </select>
            <span class="usa-input-error-message" id="input-error-message" role="alert">
              This field is required
            </span>
          </div>
          <div class="usajobs-fieldset--horizontal__row usajobs-search-save__button">
            <button id="search-save-cta" class="usa-button usa-button-primary usajobs-search-save__create">Save</button>
            <button class="usa-button usa-button-outline usajobs-search-save__cancel" data-behavior="search-save.close" aria-controls="search-save">Cancel</button>
          </div>
        </fieldset>
      </div>
    </div>
  </form>
</div>
