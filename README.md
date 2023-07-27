# 🌐 **Final Group Project: Agile Web Development with NextJS**

## **You can reuse your group project repository from your mid-term project**

## **Assignment Overview**

Your team's objective is to craft a comprehensive web solution, melding your mid-term project's insights on personas, customer journey, and branding with advanced web development techniques and agile project management. This assignment will assess both your theoretical knowledge and practical prowess, pushing you to implement NextJS, Playwright, GitHub Actions, Google Analytics, and Mailchimp holistically.  Your project is required to implement Google Analytics to track user interaction and conversion i.e. that your site visitor signed up to your company by providing their email through a form that will send it to the service MailChimp.  However, in order to do this legally you will need to have a privacy policy page and setup Google Analytics properly for GDPR compliance.

Google Analytics provides insights into user behavior on a website, tracking metrics from page views to conversions, enabling businesses to make informed decisions. However, in the era of data privacy, comes the General Data Protection Regulation (GDPR) – a European Union regulation that mandates explicit user consent before collecting any personal data. This means that before leveraging tools like Google Analytics, businesses must ensure users are well-informed and have granted permission for their data to be used. Enter Mailchimp, a marketing automation platform, which not only helps businesses grow their audience but also integrates seamlessly with these data privacy practices. By using Mailchimp, businesses can ensure GDPR compliance when collecting user information, such as email addresses, while also benefiting from its analytics features to understand subscriber behaviors. Together, Google Analytics, GDPR, and Mailchimp form a trifecta, balancing powerful insights with crucial data privacy standards.


## Agile Group Documentation Requirement.
You will need to create at least 10 user stories with story points and acceptance criteria per person.  You will need to track all of these using GitHub project/issues and provide a document that lists all of the issues and links to the issue, so that iit can be easily reviewed.  This will serve as your group activity report.

## **Assignment Introduction**

Your final project isn't just about creating a website—it's an adventure through the lifecycle of a real-world product. Dive deep into Agile methodologies, and embody roles from Product Managers to DevOps Engineers, blending the creative with the technical. 

This assignment leans on your mid-term project, demanding a translation of your branding guide, personas, and customer journey into a live, interactive website. The spirit of Agile will be your guide, while Playwright ensures your site functions seamlessly. Tools like NextJS and GitHub Actions will be your allies, streamlining development and deployment.

Every piece of content on your site, from the hero section to the footer, should have a distinct user story rooted in your brand and the needs of your target audience. And remember, while development is essential, the soul of this project is how well you integrate the elements from your mid-term project.  **Your main objective is to track if someone puts their email address to signup for MailChimp**  You want to track the events on the site.

**Your customer jounrney will look like this:**

1. User finds the site through a link <- make sure your social media meta data (twitter / facebook) are all setup correctly with a nice image. [See here](https://www.youtube.com/watch?v=AIbSlwz2u5I)
2. User goes to the homepage and sees the hero text and the call to action.  THey click the call to action to signup and you should track this as an event in google analytics
3. The user enters their email address to signup and submits.  YOou should track the form submission event even if you can see the users email in mailchimp, so your data shows the whole process in Google Analytics.

## **Technical Integration**

1. **NextJS**: Harness the power of NextJS to bring your website to life.
2. **Playwright**: Implement Playwright tests for all user stories and acceptance criteria. Remember, every part of your site—every text area, every function—should be under Playwright's watchful eye.
3. **GitHub Actions**: Incorporate GitHub Actions to automate your workflow, from development to deployment.
4. **Mailchimp**: Integrate [Mailchimp](https://mailchimp.com) to collect user signups, marking the critical conversion point for your site.
    - [Very Basic Mailchimp form - you can do this first but you should really try to implement the better integration below ](https://www.youtube.com/watch?v=3fF57uIWYIg)
    - [Video of the repo below using mailchimp and nextjs](https://www.youtube.com/watch?v=wcG6xNe10Y4)
    - [Repo with NextJS and MailChimp Example](https://github.com/ebraj/Newsletter)
5. **[Google Analytics 4 and GDPR Compliance](https://developers.google.com/analytics/devguides/collection/ga4)**: Seamlessly integrate Google Analytics, ensuring you're GDPR compliant and respecting user consent. Your aim is to track user journeys, understanding how users navigate your site, and how many reach the conversion point. Use the tutorials provided to ensure accurate implementation:
   - [Very Basic Intro to GDPR](https://www.youtube.com/watch?v=NcHSD3fWJiQ)
   - [Issues with GDPR and GOogle Analytics](https://www.youtube.com/watch?v=xBMPtaaweTs)
   - [Google Analytics Basic Setup in general](https://www.youtube.com/watch?v=xvt9x2lm5vw)
   - [Basic Google Analytics 4 and NextJS Setup - Great Video](https://www.youtube.com/watch?v=2woWjkED-vg)
   - [Overview of the steps to make GA4 compliant with GDPR]
   - [GDPR and Google Analytics Integration](https://dev.to/ramonak/react-enable-google-analytics-after-a-user-grants-consent-5bg3)
   - [Conversions with Google Analytics](https://support.google.com/analytics/answer/12966437?hl=en)

6. **Privacy Policy**: Generate a comprehensive privacy policy using tools like [Termly.io](https://termly.io/).

## **Grading Metrics**

- **Implementation of Mid-term Elements**: How effectively have you translated your branding guide, personas, and customer journey into your site? *(25 Points)*
  
- **Development & DevOps**: Is your site built effectively with NextJS? Are GitHub Actions seamlessly integrated, and does your workflow demonstrate Agile's best practices? *(25 Points)*

- **Playwright Testing**: Are all user stories and acceptance criteria effectively tested with Playwright? *(20 Points)*

- **Analytics, GDPR, & Conversions**: Have you correctly integrated Google Analytics and ensured GDPR compliance? Are conversions correctly tracked? *(20 Points)*

- **Final Presentation**: Your video presentation's clarity, depth, and adherence to the brief. *(10 Points)*

**Total**: 100 Points

## **Final Presentation**

Your presentation is a holistic showcase of your project. In a concise 5-minute video, guide us through:

1. **Your Brand's Story**: Discuss your brand archetype and persona.
2. **Website Walkthrough**: Navigate your website, highlighting user stories and their relation to your brand and target persona.
3. **Technical Demonstrations**: Exhibit your Playwright tests in action, show your GitHub Actions workflow, and walk us through a user's journey, from landing on your site to signing up via Mailchimp.
4. **Google Analytics Insights**: Highlight key data points, showcasing how users navigate your site.
5. **Closing Remarks**: End with reflections on your project, challenges faced, and lessons learned.

Remember, while technical demonstrations are crucial, the essence of your presentation should be the holistic journey—from your brand's story to the technical intricacies.

---

This assignment, while demanding, offers a glimpse into the multifaceted world of web development and marketing. Embrace the challenge, collaborate effectively, and most importantly, enjoy the journey. All the best!
