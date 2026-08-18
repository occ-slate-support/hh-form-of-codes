// Card Template (Widget)

const widgets = [
  {
    title: "Widget #1",
    code: `<p
  style="
    padding: 6px 10px;
    background-color: #002d6a;
    color: #ffffff;
    font-size: 15px;
    border-radius: 6px;
  "
>
  <b>Student Information</b>
</p>`,
    zoomButtonText: "Zoom",
    copyButtonText: "Copy",
  },
  {
    title: "Widget #2",
    code: `<p
  style="
    background-color: rgb(249, 146, 57);
    color: #ffffff;
    font-size: 14px;
    padding: 6px;
    border-radius: 6px;
    font-weight: bold;
  "
>
  Staff Use Only:
</p>`,
    zoomButtonText: "Zoom",
    copyButtonText: "Copy",
  },
  {
    title: "Widget #3",
    code: `<div
  style="
    padding: 15px;
    border: 1px solid #d86018;
    background-color: #fff7f0;
    border-radius: 8px;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.08);
    font-size: 14px;
    line-height: 1.5;
  "
>
  <strong>⚠ Important Steps:</strong>
  <ol style="margin: 8px 0 0 20px; padding: 0">
    <li>
      Submit your registration before the
      deadline.
    </li>
    <li>
      Double-check your email for confirmation.
    </li>
    <li>
      Contact support if you encounter issues.
    </li>
  </ol>
</div>`,
    zoomButtonText: "Zoom",
    copyButtonText: "Copy",
  },
  {
    title: "Widget #4",
    code: `<div
  style="
    background-color: #eef6ff;
    border: 1px solid #b6d4fe;
    padding: 16px;
    border-radius: 6px;
    margin: 20px 0;
  "
>
  <p
    style="
      margin: 0 0 8px 0;
      font-size: 16px;
      color: #002d6a;
    "
  >
    <strong>What happens next?</strong>
  </p>
  <ul
    style="
      margin: 0;
      padding-left: 18px;
      font-size: 14px;
      color: #333;
    "
  >
    <li>Our team will review your submission</li>
    <li>
      You’ll receive a follow-up email within 5–7
      business days
    </li>
    <li>
      Eligible students will be invited to the
      next step
    </li>
  </ul>
</div>`,
    zoomButtonText: "Zoom",
    copyButtonText: "Copy",
  },
  {
    title: "Widget #5",
    code: `<div
  style="
    position: relative;
    padding: 15px;
    border: 1px solid #ccc;
    background-color: #ffffff;
    border-radius: 6px;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.05);
    font-size: 14px;
    line-height: 1.5;
  "
>
  <div
    style="
      position: absolute;
      top: -10px;
      left: 15px;
      background-color: #d86018;
      color: white;
      padding: 2px 8px;
      font-size: 12px;
      font-weight: bold;
      border-radius: 4px;
    "
  >
    Instructions
  </div>
  <div style="margin-top: 8px">
    1. Log into your account.
    <br />
    2. Click
    <em>Event Registration</em>
    .
    <br />
    3. Complete the form and click
    <strong>Submit</strong>
    .
  </div>
</div>`,
    zoomButtonText: "Zoom",
    copyButtonText: "Copy",
  },
  {
    title: "Widget #6",
    code: `<div
  style="
    border: 1px solid #002d6a;
    border-radius: 10px;
    overflow: hidden;
    font-size: 14px;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);
  "
>
  <div
    style="
      background-color: #002d6a;
      color: #ffffff;
      padding: 8px 12px;
      font-weight: bold;
    "
  >
    📝 Instructions
  </div>
  <div
    style="
      padding: 12px;
      background-color: #f0f4fa;
      line-height: 1.5;
    "
  >
    1. Log into your account.
    <br />
    2. Click on the
    <em>Event Registration</em>
    tab.
    <br />
    3. Complete all required fields and click
    <strong>Submit</strong>
    .
  </div>
</div>`,
    zoomButtonText: "Zoom",
    copyButtonText: "Copy",
  },
  {
    title: "Widget #7",
    code: `<div
  style="
    padding: 15px;
    border: 1px solid #002d6a;
    background-color: #f0f4fa;
    border-radius: 10px;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);
    font-size: 14px;
    line-height: 1.5;
  "
>
  <strong>📝 Instructions:</strong>
  <ol style="margin: 10px 0 0 20px; padding: 0">
    <li>Log into your student account.</li>
    <li>
      Click on the
      <em>Event Registration</em>
      tab.
    </li>
    <li>
      Fill in all required fields and click
      <strong>Submit</strong>
      .
    </li>
  </ol>
</div>`,
    zoomButtonText: "Zoom",
    copyButtonText: "Copy",
  },
  {
    title: "Widget #8",
    code: `<div
  style="
    padding: 15px;
    border: 1px solid #002d6a;
    background-color: #f0f4fa;
    border-radius: 10px;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);
    font-size: 14px;
    line-height: 1.5;
  "
>
  <b>beepbeep</b>
  <br />
  boopboop
</div>`,
    zoomButtonText: "Zoom",
    copyButtonText: "Copy",
  },
  {
    title: "Widget #9",
    code: `<div
  style="
    padding: 12px;
    border: 1px solid #d86018;
    background-color: #fff7f0;
    border-radius: 10px;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);
  "
>
  📣 Reminder: Please complete your application
  before May 30.
</div>`,
    zoomButtonText: "Zoom",
    copyButtonText: "Copy",
  },
  {
    title: "Widget #10",
    code: `<div
  style="
    padding: 12px;
    border: 1px solid #f0c000;
    background-color: #fffbe6;
    border-radius: 10px;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);
    color: #333333;
  "
>
  ⚠️
  <strong>Please Note:</strong>
  Complete your application before
  <strong>April 30</strong>
  .
</div>`,
    zoomButtonText: "Zoom",
    copyButtonText: "Copy",
  },
  {
    title: "Widget #11",
    code: `<div
  style="
    padding: 12px;
    border: 1px solid #ff9800;
    background-color: #fff3cd;
    border-radius: 10px;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);
  "
>
  ⚠️
  <strong>Reminder:</strong>
  You must upload your documents before the
  deadline.
</div>`,
    zoomButtonText: "Zoom",
    copyButtonText: "Copy",
  },
  {
    title: "Widget #12",
    code: `<div
  style="
    padding: 12px;
    border: 1px solid #6f42c1;
    background-color: #f3e8ff;
    border-radius: 10px;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);
  "
>
  📢
  <strong>Want more support?</strong>
  Sign up for an appointment with our team!
</div>`,
    zoomButtonText: "Zoom",
    copyButtonText: "Copy",
  },
  {
    title: "Widget #13",
    code: `<div
  style="
    padding: 12px;
    border: 1px solid #b0b0b0;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);
  "
>
  ℹ️ Tip: Save this page for your records or take
  a screenshot for reference.
</div>`,
    zoomButtonText: "Zoom",
    copyButtonText: "Copy",
  },
  {
    title: "Widget #14",
    code: `<div
  style="
    padding: 12px;
    border: 1px solid #002d6a;
    background-color: #f0f4fa;
    border-radius: 10px;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.08);
    line-height: 1.5;
  "
>
  ℹ️
  <strong>
    <u>Instructions</u>
    :
  </strong>
  Please list each college and the specific dual
  enrollment courses taken. To earn credit, you
  will need to
  <strong>submit official transcripts</strong>
  from that college to Orange Coast College. Learn
  more about transcripts
  <a
    href="https://orangecoastcollege.edu/admissions-aid/enrollment/records/transcripts.html"
  >
    <strong>here</strong>
  </a>
  .
</div>`,
    zoomButtonText: "Zoom",
    copyButtonText: "Copy",
  },
  {
    title: "Widget #15",
    code: `<div
  style="
    padding: 12px;
    border-left: 5px solid #002d6a;
    background-color: #f0f4fa;
    border-radius: 10px;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.08);
    line-height: 1.5;
  "
>
  ℹ️
  <strong>Instructions:</strong>
  Please list each college and the specific dual
  enrollment courses taken. To earn credit, you
  will need to
  <strong>submit official transcripts</strong>
  from that college to Orange Coast College. Learn
  more about transcripts
  <a
    href="https://orangecoastcollege.edu/admissions-aid/enrollment/records/transcripts.html"
  >
    <strong>here</strong>
  </a>
  .
</div>`,
    zoomButtonText: "Zoom",
    copyButtonText: "Copy",
  },
  {
    title: "Widget #16",
    code: `<div
  style="
    padding: 12px;
    border: 2px dashed #f99239;
    background-color: #fffaf5;
    border-radius: 6px;
    text-align: center;
    font-size: 14px;
    color: #5a3500;
  "
>
  ⏳
  <strong>Deadline:</strong>
  Submit your application by
  <u>May 30</u>
  .
</div>`,
    zoomButtonText: "Zoom",
    copyButtonText: "Copy",
  },
  {
    title: "Widget #17",
    code: `<div style="text-align: center; margin: 15px 0">
  <a
    href="{{Form-Link}}"
    style="
      background-color: #002d6a;
      color: #fff;
      padding: 12px 20px;
      text-decoration: none;
      border-radius: 6px;
      font-weight: bold;
      display: inline-block;
    "
  >
    Edit Event Registration
  </a>
</div>`,
    zoomButtonText: "Zoom",
    copyButtonText: "Copy",
  },
  {
    title: "Widget #18",
    code: `<div style="text-align: center; margin: 25px 0">
  <a
    href="{{Form-Share-Link}}"
    onmouseout="
      this.style.background =
        'linear-gradient(90deg, #002d6a 0%, #004aad 100%)';
      this.style.color = '#ffffff';
      this.style.boxShadow =
        '0 4px 12px rgba(0,45,106,0.4)';
    "
    onmouseover="
      this.style.background =
        'linear-gradient(90deg, #f99239 0%, #ffa94d 100%)';
      this.style.color = '#002d6a';
      this.style.boxShadow =
        '0 6px 16px rgba(249,146,57,0.5)';
    "
    style="
      background: linear-gradient(
        90deg,
        #002d6a 0%,
        #004aad 100%
      );
      color: #ffffff;
      padding: 16px 40px;
      text-decoration: none;
      border-radius: 10px;
      font-weight: bold;
      font-size: 18px;
      display: inline-block;
      box-shadow: 0 4px 12px rgba(0, 45, 106, 0.4);
      transition: all 0.3s ease;
    "
  >
    🚀 Join the Virtual Open Lab
  </a>
</div>`,
    zoomButtonText: "Zoom",
    copyButtonText: "Copy",
  },
  {
    title: "Widget #19",
    code: `<div style="text-align: center; margin: 30px 0">
  <a
    href="{{Event-Link}}"
    onmouseout="
      this.style.transform = 'translateY(0)';
      this.style.boxShadow =
        '0 4px 12px rgba(0,45,106,0.4)';
    "
    onmouseover="
      this.style.transform = 'translateY(-2px)';
      this.style.boxShadow =
        '0 8px 20px rgba(249,146,57,0.6)';
    "
    style="
      background: linear-gradient(
        90deg,
        #f99239 0%,
        #ffa94d 100%
      );
      color: #002d6a;
      padding: 18px 44px;
      text-decoration: none;
      border-radius: 12px;
      font-weight: bold;
      font-size: 18px;
      display: inline-block;
      box-shadow: 0 4px 12px rgba(0, 45, 106, 0.4);
      transition: all 0.3s ease;
    "
  >
    🎉 Register for the Event
  </a>
</div>`,
    zoomButtonText: "Zoom",
    copyButtonText: "Copy",
  },
  {
    title: "Widget #20",
    code: `<div style="text-align: center; margin: 30px 0">
  <a
    href="{{Event-Link}}"
    style="
      background: #f99239;
      color: #002d6a;
      padding: 16px 36px;
      text-decoration: none;
      border-radius: 50px;
      font-weight: bold;
      font-size: 17px;
      display: inline-block;
      animation: pulse 2s infinite;
    "
  >
    ⏰ Save Your Spot
  </a>
</div>
<style type="text/css">
  /*<![CDATA[*/
  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(249, 146, 57, 0.6);
    }
    70% {
      box-shadow: 0 0 0 15px rgba(249, 146, 57, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(249, 146, 57, 0);
    }
  } /*]]>*/
</style>`,
    zoomButtonText: "Zoom",
    copyButtonText: "Copy",
  },
  {
    title: "Widget #21",
    code: `<div style="text-align: center; margin: 25px 0">
  <a
    href="{{Application-Link}}"
    style="
      background: #002d6a;
      color: #ffffff;
      padding: 16px 42px;
      text-decoration: none;
      border-radius: 8px;
      font-weight: 600;
      font-size: 17px;
      display: inline-block;
      box-shadow: 0 6px 16px
        rgba(0, 45, 106, 0.35);
    "
  >
    Apply Now
  </a>
</div>`,
    zoomButtonText: "Zoom",
    copyButtonText: "Copy",
  },
  {
    title: "Widget #22",
    code: `<div style="text-align: center; margin: 25px 0">
  <a
    href="#"
    onmouseout="
      this.style.background = 'transparent';
      this.style.color = '#002d6a';
    "
    onmouseover="
      this.style.background = '#002d6a';
      this.style.color = '#fff';
    "
    style="
      border: 2px solid #002d6a;
      color: #002d6a;
      padding: 14px 36px;
      border-radius: 8px;
      text-decoration: none;
      font-weight: bold;
      font-size: 17px;
      display: inline-block;
      transition: all 0.3s ease;
    "
  >
    📎 View Program Details
  </a>
</div>`,
    zoomButtonText: "Zoom",
    copyButtonText: "Copy",
  },
  {
    title: "Widget #23",
    code: `<div style="text-align: center; margin: 30px 0">
  <a
    href="{{Waiver-Link}}"
    style="
      background: #ffffff;
      color: #333333;
      padding: 12px 34px;
      text-decoration: none;
      border-radius: 4px;
      font-size: 14px;
      display: inline-block;
      border: 1px solid #999999;
    "
  >
    Proceed to Consent Form
  </a>
</div>`,
    zoomButtonText: "Zoom",
    copyButtonText: "Copy",
  },
  {
    title: "Widget #24",
    code: `<div style="text-align: center; margin: 30px 0">
  <p
    style="
      font-size: 14px;
      color: #555;
      margin-bottom: 10px;
    "
  >
    Applications close March 15. Late submissions
    may not be reviewed.
  </p>
  <a
    href="{{Application-Link}}"
    style="
      background: #002d6a;
      color: #ffffff;
      padding: 14px 40px;
      text-decoration: none;
      border-radius: 8px;
      font-weight: bold;
      font-size: 16px;
      display: inline-block;
    "
  >
    Submit Application
  </a>
</div>`,
    zoomButtonText: "Zoom",
    copyButtonText: "Copy",
  },
  {
    title: "Widget #25",
    code: `<div style="text-align: center; margin: 25px 0">
  <a
    href="#"
    onmouseout="this.style.background = '#f99239'"
    onmouseover="
      this.style.background = '#ffa94d'
    "
    style="
      background: #f99239;
      color: #fff;
      padding: 14px 40px;
      border-radius: 50px;
      text-decoration: none;
      font-weight: 600;
      font-size: 17px;
      display: inline-block;
      letter-spacing: 0.5px;
      transition: background 0.3s ease;
    "
  >
    🧭 Explore Opportunities
  </a>
</div>`,
    zoomButtonText: "Zoom",
    copyButtonText: "Copy",
  },
  {
    title: "Widget #26",
    code: `<div style="text-align: center; margin: 25px 0">
  <a
    href="#"
    onmouseout="this.style.color = '#002d6a'"
    onmouseover="this.style.color = '#f99239'"
    style="
      color: #002d6a;
      font-size: 15px;
      text-decoration: none;
      font-weight: bold;
      letter-spacing: 0.3px;
      transition: color 0.3s ease;
    "
  >
    Visit Our Website →
  </a>
</div>`,
    zoomButtonText: "Zoom",
    copyButtonText: "Copy",
  },
  {
    title: "Widget #27",
    code: `<div
  style="
    border-left: 6px solid #007bff;
    background-color: #f0f8ff;
    padding: 12px 16px;
  "
>
  <strong
    style="
      display: block;
      font-size: 16px;
      color: #007bff;
    "
  >
    Heads up!
  </strong>
  This event is in-person only and space is
  limited. RSVP soon.
</div>`,
    zoomButtonText: "Zoom",
    copyButtonText: "Copy",
  },
  {
    title: "Widget #28",
    code: `<div
  style="
    border-left: 6px solid #b00020;
    background-color: #fbeaea;
    padding: 12px 16px;
  "
>
  <strong
    style="
      display: block;
      font-size: 16px;
      color: #b00020;
    "
  >
    ⚠️ Oops!
  </strong>
  Based on the information you've shared, it seems
  like you are not eligible for the program at
  this time. Thank you for your interest.
</div>`,
    zoomButtonText: "Zoom",
    copyButtonText: "Copy",
  },
  {
    title: "Widget #29",
    code: `<div
  style="
    border-left: 6px solid #2e7d32;
    background-color: #e6f4ea;
    padding: 12px 16px;
  "
>
  <strong
    style="
      display: block;
      font-size: 16px;
      color: #2e7d32;
    "
  >
    ✅ Form Submitted!
  </strong>
  Thank you for submitting your form. A staff
  member will follow up with you within 1–3
  business days. Please keep an eye on your email
  for further instructions.
</div>`,
    zoomButtonText: "Zoom",
    copyButtonText: "Copy",
  },
  {
    title: "Widget #30",
    code: `<div
  style="
    border-left: 6px solid #002d6a;
    background-color: #e0e7f3;
    padding: 12px 16px;
  "
>
  <strong
    style="
      display: block;
      font-size: 16px;
      color: #002d6a;
    "
  >
    Submission Notice:
  </strong>
  By submitting this form, you acknowledge that
  the information provided is accurate to the best
  of your knowledge. Your submission serves as
  your electronic signature, granting the CalWORKs
  team at Orange Coast College permission to
  contact your county case worker, if necessary,
  to verify eligibility or coordinate support
  services.
</div>`,
    zoomButtonText: "Zoom",
    copyButtonText: "Copy",
  },
  {
    title: "Widget #31",
    code: `<div
  style="
    border-left: 6px solid #002d6a;
    background-color: #e8eef8;
    padding: 14px 18px;
    border-radius: 6px;
    font-family: Arial, sans-serif;
  "
>
  <strong
    style="
      display: block;
      font-size: 16px;
      color: #002d6a;
      margin-bottom: 6px;
    "
  >
    Submission Notice:
  </strong>
  <span style="font-size: 14px; color: #333">
    By submitting this form, you confirm that all
    information provided is accurate to the best
    of your knowledge. You also acknowledge that
    you are available during all program dates
    listed above. If your availability changes,
    you agree to notify the program staff as soon
    as possible to withdraw your application.
  </span>
</div>`,
    zoomButtonText: "Zoom",
    copyButtonText: "Copy",
  },
  {
    title: "Widget #32",
    code: `<div
  style="
    padding: 10px;
    background-color: #fbeaea;
    text-align: center;
    color: #b00020;
    border-radius: 6px;
  "
>
  ⚠️ Please review the required fields before
  submitting the form.
</div>`,
    zoomButtonText: "Zoom",
    copyButtonText: "Copy",
  },
  {
    title: "Widget #33",
    code: `<div
  style="
    padding: 10px 14px;
    border: 2px dashed #28a745;
    background-color: #eafaf1;
    border-radius: 5px;
  "
>
  ✅ You’re eligible! A staff member will follow
  up with you shortly.
</div>`,
    zoomButtonText: "Zoom",
    copyButtonText: "Copy",
  },
  {
    title: "Widget #34",
    code: `<div
  style="
    padding: 15px;
    background-color: #f4f4f4;
    border-left: 5px solid #666;
    font-style: italic;
  "
>
  This section is for general updates. Keep an eye
  out for changes.
</div>`,
    zoomButtonText: "Zoom",
    copyButtonText: "Copy",
  },
  {
    title: "Widget #35",
    code: `<div
  style="
    padding: 10px;
    background-color: #e6f9ed;
    text-align: center;
    color: #2e7d32;
    border-radius: 6px;
  "
>
  ✅ Your form has been successfully submitted!
</div>`,
    zoomButtonText: "Zoom",
    copyButtonText: "Copy",
  },
  {
    title: "Widget #36",
    code: `<div
  style="
    padding: 10px;
    background-color: #fffde7;
    text-align: center;
    color: #9e880d;
    border-radius: 6px;
  "
>
  💡 Tip: You can save your progress and come back
  later.
</div>`,
    zoomButtonText: "Zoom",
    copyButtonText: "Copy",
  },
  {
    title: "Widget #37",
    code: `<p
  style="
    padding: 10px;
    border: 2px solid #007bff;
    background-color: #eaf4ff;
  "
>
  ℹ️ Just a heads-up: This form will close on
  Friday at 5 PM.
</p>`,
    zoomButtonText: "Zoom",
    copyButtonText: "Copy",
  },
  {
    title: "Widget #38",
    code: `<p
  style="
    padding: 10px;
    border: 2px solid #28a745;
    background-color: #e6f4ea;
  "
>
  ✅ Your form was submitted successfully!
</p>`,
    zoomButtonText: "Zoom",
    copyButtonText: "Copy",
  },
  {
    title: "Widget #39",
    code: `<p
  style="
    padding: 10px;
    border: 2px solid #dc3545;
    background-color: #fbeaea;
  "
>
  ⚠️ Oops! Please make sure all required fields
  are filled out before submitting.
</p>`,
    zoomButtonText: "Zoom",
    copyButtonText: "Copy",
  },
  {
    title: "Widget #40",
    code: `<p
  style="
    padding: 5px;
    background-color: #4c6c96;
    color: #ffffff;
  "
>
  <strong>Smaller Header:</strong>
</p>`,
    zoomButtonText: "Zoom",
    copyButtonText: "Copy",
  },
  {
    title: "Widget #41",
    code: `<p
  style="
    padding: 6px 10px;
    background-color: #002d6a;
    color: #ffffff;
    font-size: 15px;
    border-radius: 6px;
  "
>
  <b>Student Information</b>
</p>`,
    zoomButtonText: "Zoom",
    copyButtonText: "Copy",
  },
  {
    title: "Widget #42",
    code: `<p
  style="
    padding: 5px 0px;
    color: #002d6a;
    font-size: 16px;
    border-bottom: 2px solid #002d6a;
    margin-bottom: 8px;
  "
>
  <b>Enrollment Information</b>
</p>
<p
  style="
    padding: 6px 10px;
    background-color: #ffffff;
    color: #002d6a;
    font-size: 15px;
    border: 2px solid #002d6a;
    border-radius: 6px;
  "
>
  <b>Family Information</b>
</p>
<p
  style="
    padding: 6px 10px;
    background-color: #f7faff;
    color: #002d6a;
    font-size: 15px;
    border-top: 1px solid #b9cde8;
    border-bottom: 1px solid #b9cde8;
  "
>
  <b>Residency Information</b>
</p>
<p
  style="
    padding: 6px 10px;
    background-color: #edf3fc;
    color: #002d6a;
    font-size: 15px;
    border: 1px dashed #002d6a;
    border-radius: 6px;
  "
>
  <b>Certification and Signature</b>
</p>
<p
  style="
    padding: 5px;
    background-color: #fff2e6;
    color: #f99239;
    font-size: 14px;
    border: 1px dashed #f99239;
    border-radius: 6px;
  "
>
  <b>Transportation Resources</b>
</p>`,
    zoomButtonText: "Zoom",
    copyButtonText: "Copy",
  },
  {
    title: "Widget #43",
    code: `<p
  style="
    padding: 5px;
    background-color: #002d6a;
    color: #ffffff;
    border-radius: 6px;
  "
>
  <b>Smaller Student Information</b>
</p>`,
    zoomButtonText: "Zoom",
    copyButtonText: "Copy",
  },
  {
    title: "Widget #44",
    code: `<p
  style="
    text-align: center;
    background-color: #e0e7f3;
    color: #002d6a;
    font-size: 14px;
    padding: 6px;
    border-radius: 6px;
    font-weight: bold;
  "
>
  Additional Info
</p>`,
    zoomButtonText: "Zoom",
    copyButtonText: "Copy",
  },
  {
    title: "Widget #45",
    code: `<p
  style="
    text-align: center;
    background-color: #fff2e6;
    color: #f99239;
    font-size: 14px;
    padding: 6px;
    border-radius: 6px;
    font-weight: bold;
  "
>
  Additional Info
</p>`,
    zoomButtonText: "Zoom",
    copyButtonText: "Copy",
  },
  {
    title: "Widget #46",
    code: `<p
  style="
    background-color: rgb(85, 85, 85);
    color: rgb(242, 242, 242);
    font-size: 14px;
    padding: 6px;
    border-radius: 6px;
    font-weight: bold;
  "
>
  Slate Team Use ONLY:
</p>`,
    zoomButtonText: "Zoom",
    copyButtonText: "Copy",
  },
  {
    title: "Widget #47",
    code: `<p
  style="
    padding: 6px 10px;
    background-color: #e0e7f3;
    color: #002d6a;
    font-size: 15px;
    border-radius: 6px;
  "
>
  🗓️
  <strong>Your Availability</strong>
</p>`,
    zoomButtonText: "Zoom",
    copyButtonText: "Copy",
  },
  {
    title: "Widget #48",
    code: `<div
  style="
    border-bottom: 4px solid #f99239;
    margin-bottom: 10px;
  "
>
  <p
    style="
      margin: 0;
      font-size: 18px;
      color: #002d6a;
    "
  >
    <strong>Section Title Here</strong>
  </p>
</div>`,
    zoomButtonText: "Zoom",
    copyButtonText: "Copy",
  },
  {
    title: "Widget #49",
    code: `<div
  style="
    border-bottom: 2px solid #f99239;
    margin-bottom: 8px;
  "
>
  <p
    style="
      margin: 0;
      font-size: 16px;
      font-weight: 600;
      color: #002d6a;
    "
  >
    Slightly smaller
  </p>
</div>`,
    zoomButtonText: "Zoom",
    copyButtonText: "Copy",
  },
  {
    title: "Widget #50",
    code: `<p
  style="
    font-size: 15px;
    color: #002d6a;
    border-bottom: 2px solid #4c6c96;
    padding-bottom: 4px;
    margin-top: 24px;
  "
>
  <strong>Checklist Section</strong>
</p>`,
    zoomButtonText: "Zoom",
    copyButtonText: "Copy",
  },
  {
    title: "Widget #51",
    code: `<div
  style="
    background-color: #fff2e6;
    padding: 12px 15px;
    border-radius: 8px;
  "
>
  🧡 CalWORKs services are available to students
  receiving county cash aid.
</div>`,
    zoomButtonText: "Zoom",
    copyButtonText: "Copy",
  },
  {
    title: "Widget #52",
    code: `<p
  style="
    border-left: 5px solid #f99239;
    background-color: #fff2e6;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);
    padding: 10px;
    margin-bottom: 15px;
    border-radius: 5px;
  "
>
  💬
  <strong>Comments or Feedback</strong>
</p>`,
    zoomButtonText: "Zoom",
    copyButtonText: "Copy",
  },
  {
    title: "Widget #53",
    code: `<p
  style="
    border-left: 5px solid #0064a4;
    background-color: #e6f1f9;
    padding: 10px;
    margin-bottom: 15px;
    border-radius: 5px;
  "
>
  💬
  <strong>Comments or Feedback</strong>
</p>`,
    zoomButtonText: "Zoom",
    copyButtonText: "Copy",
  },
  {
    title: "Widget #54",
    code: `<p
  style="
    background-color: #e6f4ea;
    color: #1a7f49;
    font-weight: bold;
    padding: 10px 14px;
    border-left: 5px solid #1a7f49;
    border-radius: 6px;
    font-size: 14px;
  "
>
  ✅ Success: Your form has been submitted!
</p>`,
    zoomButtonText: "Zoom",
    copyButtonText: "Copy",
  },
  {
    title: "Widget #55",
    code: `<p
  style="
    background-color: #fdecea;
    color: #d93025;
    font-weight: bold;
    padding: 10px 14px;
    border-left: 5px solid #d93025;
    border-radius: 6px;
    font-size: 14px;
  "
>
  ❌ Error: Something went wrong. Please try again
  or contact support.
</p>`,
    zoomButtonText: "Zoom",
    copyButtonText: "Copy",
  },
  {
    title: "Widget #56",
    code: `<p
  style="
    background-color: #fff8e1;
    color: #c48800;
    font-weight: bold;
    padding: 10px 14px;
    border-left: 5px solid #f99239;
    border-radius: 6px;
    font-size: 14px;
  "
>
  🔔 Reminder: Submit your documents before the
  deadline!
</p>`,
    zoomButtonText: "Zoom",
    copyButtonText: "Copy",
  },
  {
    title: "Widget #57",
    code: `<div
  style="
    margin: 32px 0 16px 0;
    border: 1px solid #d1d5db;
    border-left: 6px solid #002d6a;
    border-radius: 8px;
    background-color: #f8fafc;
    padding: 16px 20px;
  "
>
  <h2
    style="
      margin: 0;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 22px;
      line-height: 1.3;
      color: #002d6a;
      font-weight: 700;
    "
  >
    Educational Background
  </h2>
  <p
    style="
      margin: 8px 0 0 0;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 14px;
      line-height: 1.5;
      color: #4b5563;
    "
  >
    Share your academic history and preparation
    for the Honors Program.
  </p>
</div>`,
    zoomButtonText: "Zoom",
    copyButtonText: "Copy",
  },
  {
    title: "Widget #58",
    code: `<p
  style="
    padding: 6px 10px;
    background-color: #f2f6fa;
    color: #002d6a;
    font-size: 15px;
    border-left: 4px solid #4c6c96;
  "
>
  <strong>Section Title</strong>
</p>`,
    zoomButtonText: "Zoom",
    copyButtonText: "Copy",
  },
  {
    title: "Widget #59",
    code: `<p
  style="
    padding: 6px 10px;
    background-color: #fff2e6;
    color: #002d6a;
    font-size: 15px;
    border-left: 4px solid #f99239;
  "
>
  💬
  <strong>Comments or Feedback</strong>
</p>`,
    zoomButtonText: "Zoom",
    copyButtonText: "Copy",
  },
  {
    title: "Widget #60",
    code: `<p
  style="
    background-color: #0064a4;
    color: white;
    padding: 10px;
    margin-bottom: 15px;
    border-radius: 5px;
  "
>
  💬
  <strong>Comments or Feedback</strong>
</p>`,
    zoomButtonText: "Zoom",
    copyButtonText: "Copy",
  },
  {
    title: "Widget #61",
    code: `<div
  style="
    margin: 24px 0;
    border: 1px solid #d1d5db;
    border-top: 5px solid #002d6a;
    border-radius: 8px;
    background-color: #ffffff;
    padding: 16px 18px;
    font-family: Arial, Helvetica, sans-serif;
  "
>
  <p
    style="
      margin: 0 0 10px 0;
      font-size: 15px;
      line-height: 1.4;
      font-weight: 700;
      color: #002d6a;
    "
  >
    Before You Continue
  </p>
  <ul
    style="
      margin: 0;
      padding-left: 20px;
      color: #374151;
      font-size: 14px;
      line-height: 1.7;
    "
  >
    <li>Review your personal information</li>
    <li>Complete all required questions</li>
    <li>
      Prepare your statement responses carefully
    </li>
  </ul>
</div>`,
    zoomButtonText: "Zoom",
    copyButtonText: "Copy",
  },
  {
    title: "Widget #62",
    code: `<div
  style="
    background-color: #fff4e6;
    border: 1px solid #f9c784;
    padding: 14px 16px;
    border-radius: 6px;
    margin: 16px 0;
  "
>
  <p
    style="
      margin: 0;
      font-size: 14px;
      color: #4a4a4a;
    "
  >
    <strong>Good to know:</strong>
    Completing this form does not guarantee
    placement, but helps us connect you with the
    right resources.
  </p>
</div>`,
    zoomButtonText: "Zoom",
    copyButtonText: "Copy",
  },
  {
    title: "Widget #63",
    code: `<p
  style="
    border: 2px solid #0064a4;
    padding: 10px;
    margin-bottom: 15px;
    border-radius: 5px;
    background-color: transparent;
    color: #0064a4;
  "
>
  💬
  <strong>Comments or Feedback</strong>
</p>`,
    zoomButtonText: "Zoom",
    copyButtonText: "Copy",
  },
  {
    title: "Widget #64",
    code: `<div
  style="
    border-left: 5px solid #0064a4;
    background-color: #e6f1f9;
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 15px;
  "
>
  ℹ️
  <strong>Note:</strong>
  Please complete all required fields before
  submitting.
</div>`,
    zoomButtonText: "Zoom",
    copyButtonText: "Copy",
  },
  {
    title: "Widget #65",
    code: `<div
  style="
    margin: 20px 0;
    padding: 12px 14px;
    border-radius: 6px;
    background-color: #eef4fb;
    border: 1px solid #d7e3f3;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    line-height: 1.6;
    color: #374151;
  "
>
  <strong style="color: #002d6a">Note:</strong>
  The information entered on this form will be
  used to review your Honors Program application.
</div>`,
    zoomButtonText: "Zoom",
    copyButtonText: "Copy",
  },
  {
    title: "Widget #66",
    code: `<style type="text/css">
  /*<![CDATA[*/
  table.student-info {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    margin: 10px 0 20px 0;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    border: 2px solid #002d6a;
    border-radius: 6px;
    overflow: hidden;
  }
  table.student-info th.section-header {
    background-color: #002d6a;
    color: #ffffff;
    text-align: left;
    padding: 8px 12px;
    font-size: 15px;
    font-weight: 600;
  }
  table.student-info td {
    padding: 8px 12px;
    border-top: 1px solid #002d6a;
    vertical-align: top;
  }
  table.student-info td.label {
    width: 35%;
    font-weight: 600;
    background-color: #f4f7fb;
  }
  table.student-info td.value {
    width: 65%;
  } /*]]>*/
</style>
<table class="student-info">
  <thead>
    <tr>
      <th class="section-header" colspan="2">
        Student Information
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="label">Student Name</td>
      <td class="value">John Doe</td>
    </tr>
    <tr>
      <td class="label">Student ID</td>
      <td class="value">01234567</td>
    </tr>
    <tr>
      <td class="label">Email</td>
      <td class="value">
        <a href="mailto:jdoe@student.occc.edu">
          jdoe@student.occc.edu
        </a>
      </td>
    </tr>
    <tr>
      <td class="label">Program</td>
      <td class="value">Veterans Counseling</td>
    </tr>
  </tbody>
</table>`,
    zoomButtonText: "Zoom",
    copyButtonText: "Copy",
  },
  {
    title: "Widget #67",
    code: `<div
  style="
    max-width: 100%;
    margin: 0 auto;
    font-family: Arial, Helvetica, sans-serif;
    color: #1f2937;
  "
>
  <div
    style="
      border: 1px solid #d1d5db;
      border-top: 6px solid #002d6a;
      border-radius: 8px;
      overflow: hidden;
      background-color: #ffffff;
    "
  >
    <div
      style="
        padding: 20px 24px;
        background-color: #f8fafc;
        border-bottom: 1px solid #e5e7eb;
      "
    >
      <h2
        style="
          margin: 0;
          font-size: 22px;
          line-height: 1.3;
          color: #002d6a;
          font-weight: 700;
        "
      >
        Student Information
      </h2>
      <p
        style="
          margin: 8px 0 0 0;
          font-size: 14px;
          line-height: 1.5;
          color: #4b5563;
        "
      >
        Please review the information below and
        confirm that everything is correct. If you
        need to make any updates to your contact
        information, please visit your MyCoast to
        make the the changes.
        <br />
        <br />
        Once you submit, the team will send you
        the link to complete the Honors Program
        Orientation Quiz.
      </p>
    </div>
    <table
      role="presentation"
      style="
        width: 100%;
        border-collapse: collapse;
        table-layout: fixed;
      "
    >
      <tbody>
        <tr>
          <td
            style="
              width: 38%;
              padding: 14px 16px;
              background-color: #eef4fb;
              border-bottom: 1px solid #e5e7eb;
              font-size: 14px;
              line-height: 1.4;
              font-weight: 700;
              color: #002d6a;
              vertical-align: top;
            "
          >
            Student ID
          </td>
          <td
            style="
              width: 62%;
              padding: 14px 16px;
              border-bottom: 1px solid #e5e7eb;
              font-size: 15px;
              line-height: 1.5;
              color: #111827;
              vertical-align: top;
              word-break: break-word;
            "
          >
            {{banner_id}}
          </td>
        </tr>
        <tr>
          <td
            style="
              padding: 14px 16px;
              background-color: #eef4fb;
              border-bottom: 1px solid #e5e7eb;
              font-size: 14px;
              line-height: 1.4;
              font-weight: 700;
              color: #002d6a;
              vertical-align: top;
            "
          >
            First Name
          </td>
          <td
            style="
              padding: 14px 16px;
              border-bottom: 1px solid #e5e7eb;
              font-size: 15px;
              line-height: 1.5;
              color: #111827;
              vertical-align: top;
              word-break: break-word;
            "
          >
            {{first}}
          </td>
        </tr>
        <tr>
          <td
            style="
              padding: 14px 16px;
              background-color: #eef4fb;
              border-bottom: 1px solid #e5e7eb;
              font-size: 14px;
              line-height: 1.4;
              font-weight: 700;
              color: #002d6a;
              vertical-align: top;
            "
          >
            Chosen Name
            <br />
            <span
              style="
                display: inline-block;
                margin-top: 4px;
                font-size: 12px;
                line-height: 1.4;
                font-weight: 400;
                color: #6b7280;
              "
            >
              Also referred to as Preferred Name
            </span>
          </td>
          <td
            style="
              padding: 14px 16px;
              border-bottom: 1px solid #e5e7eb;
              font-size: 15px;
              line-height: 1.5;
              color: #111827;
              vertical-align: top;
              word-break: break-word;
            "
          >
            {{preferred}}
          </td>
        </tr>
        <tr>
          <td
            style="
              padding: 14px 16px;
              background-color: #eef4fb;
              border-bottom: 1px solid #e5e7eb;
              font-size: 14px;
              line-height: 1.4;
              font-weight: 700;
              color: #002d6a;
              vertical-align: top;
            "
          >
            Last Name
          </td>
          <td
            style="
              padding: 14px 16px;
              border-bottom: 1px solid #e5e7eb;
              font-size: 15px;
              line-height: 1.5;
              color: #111827;
              vertical-align: top;
              word-break: break-word;
            "
          >
            {{last}}
          </td>
        </tr>
        <!--<tr>
          <td style="padding:14px 16px; background-color:#eef4fb; border-bottom:1px solid #e5e7eb; font-size:14px; line-height:1.4; font-weight:700; color:#002D6A; vertical-align:top;">High School</td>
          <td style="padding:14px 16px; border-bottom:1px solid #e5e7eb; font-size:15px; line-height:1.5; color:#111827; vertical-align:top; word-break:break-word;">{{highschools}}</td>
        </tr>-->
        <tr>
          <td
            style="
              padding: 14px 16px;
              background-color: #eef4fb;
              border-bottom: 1px solid #e5e7eb;
              font-size: 14px;
              line-height: 1.4;
              font-weight: 700;
              color: #002d6a;
              vertical-align: top;
            "
          >
            Student Email
          </td>
          <td
            style="
              padding: 14px 16px;
              border-bottom: 1px solid #e5e7eb;
              font-size: 15px;
              line-height: 1.5;
              color: #111827;
              vertical-align: top;
              word-break: break-word;
            "
          >
            {{cccd-email}}
          </td>
        </tr>
        <tr>
          <td
            style="
              padding: 14px 16px;
              background-color: #eef4fb;
              border-bottom: 1px solid #e5e7eb;
              font-size: 14px;
              line-height: 1.4;
              font-weight: 700;
              color: #002d6a;
              vertical-align: top;
            "
          >
            Phone Number
          </td>
          <td
            style="
              padding: 14px 16px;
              border-bottom: 1px solid #e5e7eb;
              font-size: 15px;
              line-height: 1.5;
              color: #111827;
              vertical-align: top;
              word-break: break-word;
            "
          >
            {{phone}}
          </td>
        </tr>
        <tr>
          <td
            style="
              padding: 14px 16px;
              background-color: #eef4fb;
              font-size: 14px;
              line-height: 1.4;
              font-weight: 700;
              color: #002d6a;
              vertical-align: top;
            "
          >
            Pronouns
          </td>
          <td
            style="
              padding: 14px 16px;
              font-size: 15px;
              line-height: 1.5;
              color: #111827;
              vertical-align: top;
              word-break: break-word;
            "
          >
            {{pronouns}}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>`,
    zoomButtonText: "Zoom",
    copyButtonText: "Copy",
  },
  {
    title: "Widget #68",
    code: `<style type="text/css">
  /*<![CDATA[*/
  .progress-container {
    width: 100%;
    background: #e6e6e6;
    border-radius: 20px;
    overflow: hidden;
    margin: 20px 0;
    height: 25px;
  }
  .progress-fill {
    height: 100%;
    width: 65%; /* Change this % dynamically */
    background: linear-gradient(
      90deg,
      #002d6a,
      #f99239
    );
    text-align: center;
    line-height: 25px;
    color: white;
    font-weight: bold;
  } /*]]>*/
</style>
<div class="progress-container">
  <div class="progress-fill">65%</div>
</div>`,
    zoomButtonText: "Zoom",
    copyButtonText: "Copy",
  },
  {
    title: "Widget #69",
    code: `Dot progres bar
<br />
<style type="text/css">
  /*<![CDATA[*/
  .step-dots {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin: 30px 0;
  }
  .step-dot {
    width: 20px;
    height: 20px;
    background: #ccc;
    border-radius: 50%;
  }
  .step-dot.active {
    background: #002d6a;
  }
  .step-dot.completed {
    background: #f99239;
  } /*]]>*/
</style>
<div class="step-dots">
  <div class="step-dot completed"></div>
  <div class="step-dot completed"></div>
  <div class="step-dot active"></div>
  <div class="step-dot"></div>
  <div class="step-dot"></div>
</div>`,
    zoomButtonText: "Zoom",
    copyButtonText: "Copy",
  },
  {
    title: "Widget #70",
    code: `Dot progress bar with labels
<br />
<style type="text/css">
  /*<![CDATA[*/
  .step-dots {
    display: flex;
    justify-content: center;
    gap: 40px; /* space between dots+labels */
    margin: 30px 0;
  }
  .step {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 12px;
    color: #002d6a;
    font-weight: bold;
    max-width: 80px;
    text-align: center;
  }
  .step-dot {
    width: 20px;
    height: 20px;
    background: #ccc;
    border-radius: 50%;
    margin-bottom: 6px;
  }
  .step-dot.active {
    background: #002d6a;
  }
  .step-dot.completed {
    background: #f99239;
  } /*]]>*/
</style>
<div class="step-dots">
  <div class="step">
    <div class="step-dot completed"></div>
    <div>Home</div>
  </div>
  <div class="step">
    <div class="step-dot completed"></div>
    <div>Student Info</div>
  </div>
  <div class="step">
    <div class="step-dot active"></div>
    <div>Academic Info</div>
  </div>
  <div class="step">
    <div class="step-dot"></div>
    <div>Eligibility</div>
  </div>
  <div class="step">
    <div class="step-dot"></div>
    <div>Services</div>
  </div>
</div>`,
    zoomButtonText: "Zoom",
    copyButtonText: "Copy",
  },
  {
    title: "Widget #71",
    code: `<div style="margin: 15px 0">
  <div
    style="font-size: 13px; margin-bottom: 4px"
  >
    Form Progress
  </div>
  <div
    style="
      background: #e5e7eb;
      border-radius: 8px;
      height: 10px;
    "
  >
    <div
      style="
        width: 40%;
        background: #002d6a;
        height: 10px;
        border-radius: 8px;
      "
    ></div>
  </div>
</div>`,
    zoomButtonText: "Zoom",
    copyButtonText: "Copy",
  },
  {
    title: "Widget #72",
    code: `<p
  style="
    padding: 10px;
    border: 2px solid #f2f2f2;
    background-color: #f2f2f2;
  "
>
  <strong>
    Alternative Option to a Header Row
  </strong>
</p>
<hr />`,
    zoomButtonText: "Zoom",
    copyButtonText: "Copy",
  },
  {
    title: "Widget #73",
    code: `<style type="text/css">
  /*<![CDATA[*/
  .comparison-table {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    margin-top: 24px;
    align-items: stretch;
  }
  .program-box {
    flex: 1 1 48%;
    background: var(--white);
    border: 1px solid var(--border);
    border-top: 6px solid var(--occorange);
    border-radius: 16px;
    padding: 26px;
    box-shadow: 0 8px 24px rgba(0, 45, 106, 0.08);
    transition:
      transform 0.2s ease,
      box-shadow 0.2s ease;
  }
  .program-box:hover {
    transform: translateY(-4px);
    box-shadow: 0 14px 28px rgba(0, 45, 106, 0.14);
  }
  .program-box img {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 0 auto 16px auto;
  }
  .program-box h2 {
    color: var(--occblue);
    font-size: 26px;
    line-height: 1.2;
    text-align: center;
    margin: 0 0 12px 0;
  }
  .program-intro {
    text-align: center;
    font-size: 16px;
    line-height: 1.6;
    color: var(--muted);
    margin-bottom: 20px;
  }
  .section-title {
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--occblue);
    margin-top: 22px;
    margin-bottom: 10px;
    padding-bottom: 6px;
    border-bottom: 2px solid #d6e2f1;
  }
  ul {
    padding-left: 20px;
    margin: 0;
  }
  li {
    margin-bottom: 10px;
    line-height: 1.6;
  }
  .highlight-box {
    background: var(--bg);
    border-left: 4px solid var(--occorange);
    padding: 12px 14px;
    border-radius: 8px;
    margin-top: 16px;
    font-size: 14px;
    line-height: 1.5;
  }
  @media (max-width: 768px) {
    .program-box {
      flex: 1 1 100%;
      padding: 20px;
    }
    .program-box h2 {
      font-size: 22px;
    }
    .program-intro {
      font-size: 15px;
    }
  } /*]]>*/
</style>
<div class="comparison-table">
  <div class="program-box">
    <img
      alt="MESA Logo"
      src="https://crm.cccd.edu/www/images/OCC%20MESA/OCC_MESA%20LOGO%20vr2.png"
      style="max-height: 110px"
    />
    <h2>MESA Program</h2>
    <p class="program-intro">
      <strong>
        MESA (Math, Engineering, Science
        Achievement)
      </strong>
      supports first-generation, low-income
      students pursuing transfer success in STEM.
    </p>
    <p class="section-title">Benefits</p>
    <ul>
      <li>
        Dedicated space for study and recreation
      </li>
      <li>STEM counseling in the MESA Center</li>
      <li>
        STEM tutoring referrals and tutor-led
        study groups
      </li>
      <li>
        Peer mentors and a supportive STEM
        community
      </li>
      <li>
        Equipment loans such as calculators and
        goggles
      </li>
      <li>
        Scholarship, research, and internship
        opportunities
      </li>
      <li>
        Campus visits, paid industry field trips,
        and enrichment activities
      </li>
    </ul>
    <p class="section-title">Eligibility</p>
    <ul>
      <li>First-generation college student</li>
      <li>
        Financial aid recipient at Orange Coast
        College
      </li>
      <li>
        Pursuing a calculus-based STEM major
      </li>
      <li>
        Working toward a first bachelor’s degree
      </li>
      <li>
        Planning to transfer to a 4-year
        institution
      </li>
    </ul>
    <div class="highlight-box">
      <strong>Great fit for:</strong>
      First-generation students looking for a
      strong transfer-focused STEM support
      community.
    </div>
  </div>
  <div class="program-box">
    <img
      alt="STEM Accelerator Logo"
      src="https://crm.cccd.edu/www/images/OCC%20STEM%20Accelerator/Logo%20-%20STEM%20Accelerator.png"
      style="max-height: 110px"
    />
    <h2>STEM Accelerator</h2>
    <p class="program-intro">
      <strong>STEM Accelerator</strong>
      helps low-income STEM students build
      momentum with academic support, mentoring,
      and enrichment opportunities.
    </p>
    <p class="section-title">Benefits</p>
    <ul>
      <li>Dedicated study area</li>
      <li>
        STEM counseling in the STEM Accelerator
        space
      </li>
      <li>Support from peer mentors</li>
      <li>
        Close access to STEM tutoring and study
        groups
      </li>
      <li>
        Campus trips, industry field trips,
        memberships, and enrichment activities
      </li>
    </ul>
    <p class="section-title">Eligibility</p>
    <ul>
      <li>Eligible for financial aid</li>
      <li>Pursuing any STEM major</li>
    </ul>
    <div class="highlight-box">
      <strong>Great fit for:</strong>
      Students seeking flexible STEM support
      without the first-generation or
      calculus-based major requirement.
    </div>
  </div>
</div>`,
    zoomButtonText: "Zoom",
    copyButtonText: "Copy",
  },
  {
    title: "Widget #74",
    code: `<div
  style="
    border: 1px solid #e0e0e0;
    border-radius: 12px;
    overflow: hidden;
    font-size: 14px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
    max-width: 700px;
    margin: auto;
    background: #ffffff;
  "
>
  <!-- Header Section with Logo & Title -->
  <div
    style="
      text-align: center;
      padding: 20px 15px;
      background: #f9f9f9;
    "
  >
    <img
      alt="OCC Umoja Logo"
      src="https://crm.cccd.edu/www/images/OCC%20Umoja/logo-banner.jpg"
      style="
        max-width: 80%;
        height: auto;
        border-radius: 8px;
      "
    />
    <h2
      style="
        color: #002d6a;
        margin: 15px 0 0 0;
        font-size: 20px;
        font-weight: bold;
      "
    >
      About Orange Coast College's Umoja Program
    </h2>
  </div>
  <!-- Content Section -->
  <div
    style="
      padding: 20px;
      line-height: 1.6;
      color: #333;
    "
  >
    <p>
      <strong>blah</strong>
      , (akjdbhasjdkbh)ahjbdjhabdahjs
    </p>
    <h3 style="color: #002d6a; margin-top: 20px">
      Program Requirements:
    </h3>
    <ul
      style="
        list-style: none;
        padding-left: 0;
        line-height: 1.8;
      "
    >
      <li>✓ Complete OCC Application</li>
      <li>
        ✓ Be enrolled as an OCC student (full-time
        or part-time)
      </li>
      <li>
        ✓ Complete FAFSA Application or CA Dream
        Act
      </li>
      <li>☐ Complete Umoja Application</li>
      <li>☐ Complete Umoja Orientation</li>
      <li>
        ☐ Complete the Umoja Student Contract
      </li>
      <li>
        ☐ Meet with Umoja Counselor/Coordinator
      </li>
    </ul>
    <p
      style="
        margin-top: 20px;
        font-weight: bold;
        text-align: center;
        color: #002d6a;
      "
    >
      We are so glad that you are interested in
      joining the Umoja family at Orange Coast
      College!
      <br />
      Please take a few minutes to complete the
      application below:
    </p>
  </div>
</div>`,
    zoomButtonText: "Zoom",
    copyButtonText: "Copy",
  },
  {
    title: "Widget #75",
    code: `<div
  style="
    padding: 10px;
    border: 2px dotted #0d075a;
    background-color: #f2f2f2;
  "
>
  <b>Dotted Instruction box!</b>
</div>
&nbsp;
<div
  style="
    padding: 10px;
    border: 2px dotted #0d075a;
  "
>
  <b>Blank White Dotted Instruction box!</b>
</div>`,
    zoomButtonText: "Zoom",
    copyButtonText: "Copy",
  },
  {
    title: "Widget #76",
    code: `Table!&nbsp;
<em>(copied from Pirates Promise form)</em>
<table
  border="1"
  cellpadding="1"
  cellspacing="1"
  style="width: 500px"
>
  <tbody>
    <tr>
      <td><strong>Student ID:</strong></td>
      <td>{{banner_id}}</td>
    </tr>
    <tr>
      <td><strong>First Name:</strong></td>
      <td>{{first}}</td>
    </tr>
    <tr>
      <td>
        <strong>
          Chosen Name (Also referred to as
          Preferred Name):
        </strong>
      </td>
      <td>{{preferred}}</td>
    </tr>
    <tr>
      <td><strong>Last Name:</strong></td>
      <td>{{last}}</td>
    </tr>
    <tr>
      <td><strong>High School:</strong></td>
      <td>{{highschools}}</td>
    </tr>
    <tr>
      <td><strong>Student Email:</strong></td>
      <td>{{cccd-email}}</td>
    </tr>
    <tr>
      <td><strong>Phone Number:</strong></td>
      <td>{{phone}}</td>
    </tr>
    <tr>
      <td><strong>Pronouns:</strong></td>
      <td>{{pronouns}}</td>
    </tr>
  </tbody>
</table>`,
    zoomButtonText: "Zoom",
    copyButtonText: "Copy",
  },
  {
    title: "Widget #77",
    code: `<h3>Common Date and Time Format Masks</h3>
<table>
  <thead>
    <tr>
      <th>Format Mask</th>
      <th>Description/example output</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>yyyy-MM-dd</td>
      <td>2024-04-24</td>
    </tr>
    <tr>
      <td>MM/dd/yyyy</td>
      <td>04/24/2024</td>
    </tr>
    <tr>
      <td>dd-MM-yyyy</td>
      <td>24-04-2024</td>
    </tr>
    <tr>
      <td>MMMM d, yyyy</td>
      <td>April 24, 2024</td>
    </tr>
    <tr>
      <td>dddd, MMMM d</td>
      <td>Wednesday, April 24</td>
    </tr>
    <tr>
      <td>hh:mm:ss tt</td>
      <td>04:15:32 PM</td>
    </tr>
    <tr>
      <td>h:mm tt</td>
      <td>4:15 PM</td>
    </tr>
    <tr>
      <td>HH:mm</td>
      <td>16:15 (24-hour format)</td>
    </tr>
    <tr>
      <td>yyyyMMdd</td>
      <td>20240424</td>
    </tr>
    <tr>
      <td>yyyy</td>
      <td>2024 (year only)</td>
    </tr>
  </tbody>
</table>`,
    zoomButtonText: "Zoom",
    copyButtonText: "Copy",
  },
  {
    title: "Widget #78",
    code: `<style type="text/css">
  /*<![CDATA[*/
  .faq-section {
    margin: 20px 0;
  }
  .faq-toggle {
    background-color: #f2f2f2;
    color: #002d6a;
    cursor: pointer;
    padding: 12px;
    width: 100%;
    border: none;
    text-align: left;
    outline: none;
    font-size: 16px;
    font-weight: bold;
    transition: background-color 0.2s ease;
    border-radius: 6px;
    margin-top: 10px;
  }
  .faq-toggle:hover {
    background-color: #e0e0e0;
  }
  .faq-content {
    padding: 10px 14px;
    display: none;
    overflow: hidden;
    background-color: #ffffff;
    border: 1px solid #ddd;
    border-radius: 0 0 6px 6px;
    font-size: 14px;
    margin-bottom: 10px;
  } /*]]>*/
</style>
<details
  style="
    margin-bottom: 12px;
    border: 1px solid #ddd;
    border-radius: 6px;
    padding: 8px;
  "
>
  <summary
    style="
      font-weight: bold;
      color: #002d6a;
      cursor: pointer;
    "
  >
    ❓ What is MESA?
  </summary>
  <p style="margin-top: 8px">
    MESA (Math, Engineering, Science Achievement)
    is a support program for students pursuing
    STEM majors, especially those who are
    first-generation or from underserved
    communities.
  </p>
</details>
<details
  style="
    margin-bottom: 12px;
    border: 1px solid #ddd;
    border-radius: 6px;
    padding: 8px;
  "
>
  <summary
    style="
      font-weight: bold;
      color: #002d6a;
      cursor: pointer;
    "
  >
    💼 What kind of support does MESA offer?
  </summary>
  <p style="margin-top: 8px">
    MESA offers academic counseling, peer
    mentoring, internships, transfer support, a
    study center, and professional development
    workshops.
  </p>
</details>
<details
  style="
    margin-bottom: 12px;
    border: 1px solid #ddd;
    border-radius: 6px;
    padding: 8px;
  "
>
  <summary
    style="
      font-weight: bold;
      color: #002d6a;
      cursor: pointer;
    "
  >
    📅 How do I apply?
  </summary>
  <p style="margin-top: 8px">
    You can apply by filling out the MESA Interest
    Form on this page. Make sure you meet the
    eligibility requirements!
  </p>
</details>`,
    zoomButtonText: "Zoom",
    copyButtonText: "Copy",
  },
  {
    title: "Widget #79",
    code: `<u><strong></strong></u>
<style type="text/css">
  /*<![CDATA[*/
  .toggle-container {
    border: 1px solid #ccc;
    border-radius: 8px;
    margin: 10px 0;
    overflow: hidden;
  }
  .toggle-label {
    display: block;
    background-color: #002d6a;
    color: white;
    padding: 12px;
    font-weight: bold;
    cursor: pointer;
  }
  .toggle-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.25s ease-out;
    background-color: #f9f9f9;
    padding: 0 12px;
  }
  .toggle-checkbox:checked
    + .toggle-label
    + .toggle-content {
    max-height: 1000px;
    padding: 12px;
  } /*]]>*/
</style>
<u><strong>TOGGLES</strong></u>
<!-- Adult Learning Environment -->
<div class="toggle-container">
  <input
    class="toggle-checkbox"
    id="toggle1"
    style="display: none"
    type="checkbox"
  />
  <label class="toggle-label" for="toggle1">
    🏫 Adult Learning Environment
  </label>
  <div class="toggle-content">
    <p>
      OCC offers an adult learning environment
      that includes student access to library
      resources and other services on campus.
      Parents and students are requested to select
      appropriate classes, subject to college
      policy and procedures. The high school and
      the College determine who may enroll, based
      on their judgment of the applicant's
      eligibility.
    </p>
    <p>
      The College has the right and responsibility
      to restrict enrollment for reasons of health
      and safety, appropriateness of the course,
      preparedness of the student, availability,
      registration priority, and College policy.
      Minimum school day attendance at the
      student's regular school is required by law.
    </p>
  </div>
</div>
<!-- Rules & Regulations -->
<div class="toggle-container">
  <input
    class="toggle-checkbox"
    id="toggle2"
    style="display: none"
    type="checkbox"
  />
  <label class="toggle-label" for="toggle2">
    📘 Rules &amp; Regulations
  </label>
  <div class="toggle-content">
    <p>
      CCCD Dual Enrollment students are
      responsible for complying with the rules and
      regulations of the college(s) as published
      in the
      <a
        href="https://catalog.cccd.edu/orange-coast/"
        target="_blank"
      >
        OCC College Catalog
      </a>
      and
      <a
        href="https://orangecoastcollege.edu/academics/class-schedule/index.html"
        target="_blank"
      >
        Schedule of Classes
      </a>
      .
    </p>
  </div>
</div>
<!-- Photograph Release -->
<div class="toggle-container">
  <input
    class="toggle-checkbox"
    id="toggle3"
    style="display: none"
    type="checkbox"
  />
  <label class="toggle-label" for="toggle3">
    📸 Photograph Release
  </label>
  <div class="toggle-content">
    <p>
      OCC may take and use photos of participants
      to use in our promotional material. I hereby
      grant OCC permission to use my student’s
      likeness, name, voice, and words in any
      broadcast, telecast, or print media account
      of college events or activities.
    </p>
  </div>
</div>
<!-- Grades & Transcripts -->
<div class="toggle-container">
  <input
    class="toggle-checkbox"
    id="toggle4"
    style="display: none"
    type="checkbox"
  />
  <label class="toggle-label" for="toggle4">
    📄 Grades &amp; Transcripts
  </label>
  <div class="toggle-content">
    <p>
      It is the student's responsibility to drop a
      course they have been registered for if they
      need to. Deadlines to drop classes are
      posted on the course description in the
      Searchable Class Schedule on the OCC website
      and on your Student Class Program (Web
      Schedule Bill) via MyCoast portal. These
      dates and deadlines are final and cannot be
      extended.
    </p>
    <p>
      By signing, you agree to the mandated dates
      and deadlines for any courses you decide to
      take in the future for dual or concurrent
      enrollment. For convenience, students who
      need to drop a course are encouraged to do
      so using their MyCoast portal. Otherwise,
      they will need to come to the Orange Coast
      College Enrollment Center.
    </p>
    <p>
      Students who withdraw prior to the final
      withdrawal deadline will receive a "W" mark,
      which will appear on their permanent
      academic transcript and will be used in
      determining a student's academic standing.
      Students who are still enrolled in a college
      course on the "Census Date" will receive a
      grade for the course on their college
      transcript.
    </p>
    <p>
      Students may have a Pass/Not Pass grade
      option available to them, depending on the
      course; selecting this option can affect
      transfer credit and should be selected under
      advisement of an OCC counselor.
    </p>
    <p>
      Grades earned at Orange Coast College are
      part of a student’s permanent college
      record. These records may be transferred to
      four-year universities as official college
      work and will be considered for financial
      aid and NCAA eligibility purposes. Students
      are advised to take their performance in
      these college classes seriously.
    </p>
  </div>
</div>
<!-- Accommodations -->
<div class="toggle-container">
  <input
    class="toggle-checkbox"
    id="toggle5"
    style="display: none"
    type="checkbox"
  />
  <label class="toggle-label" for="toggle5">
    ♿ Accommodations
  </label>
  <div class="toggle-content">
    <p>
      Students who have an IEP and are receiving
      services at their high school may request
      accommodations at OCC by contacting the
      Accessibility Resource Center (ARC) and
      completing an application.
    </p>
  </div>
</div>`,
    zoomButtonText: "Zoom",
    copyButtonText: "Copy",
  },
];

const tpl = document.getElementById("template-widget-card");
const gallery = document.getElementById("grid-widgets");

for (const widget of widgets) {
  const node = tpl.content.cloneNode(true);

  node.querySelector(".template-information h2").textContent = widget.title;
  node.querySelector(".demo").innerHTML = widget.code;
  node.querySelector(".code-snippet code").textContent = widget.code;
  node.querySelector(".hidden-code").textContent = widget.code;

  node.querySelector(".zoom-btn").textContent = widget.zoomButtonText;
  node.querySelector(".copy-btn").textContent = widget.copyButtonText;

  gallery.append(node);
}


// Copy functionality

let resetTimer = null;

function copyHidden(button) {
  clearTimeout(resetTimer);

  if (button.dataset.originalText) {
    button.innerText = button.dataset.originalText;
  } else {
    button.dataset.originalText = button.innerText;
  }

  const codeSnippet = button.nextElementSibling.innerText;
  const buttonTempHeight = button.offsetHeight + "px";
  button.style.height = "";

  navigator.clipboard.writeText(codeSnippet).then(() => {
    button.innerText = "Copied!";
    button.style.height = buttonTempHeight;
    resetTimer = setTimeout(() => {
      button.innerText = button.dataset.originalText;
      button.style.height = "";
      delete button.dataset.originalText;
    }, 2000);
  });
}

// Zoom-in functionality

const modal = document.querySelector(".snippet-modal");
const modalCode = modal.querySelector(".modal-code");

document.querySelectorAll(".zoom-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const code = btn.closest(".code-container").querySelector(".code-snippet code").textContent;
    modalCode.textContent = code;
    Prism.highlightElement(modalCode);
    modal.showModal();
  });
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.close();
})