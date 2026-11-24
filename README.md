# Sanjeevani Hospitals — Hospital 360 Marketing Cloud Demo

A responsive, static **fictional hospital website** for practicing Salesforce Marketing Cloud Engagement integrations. It is **not a functioning hospital or a medical service**.

## What is included

- `index.html` — hospital home page
- `services.html` — fictional services and branches
- `events.html` — public event registration, including a link to your existing SFMC CloudPage
- `appointments.html` — local-only appointment-request UI demonstration (does not send/store information)
- `enquiry.html` — local-only enquiry UI demonstration (does not send/store information)
- `lab.html` — integration status, test cases, and build sequence
- `assets/config.js` — public CloudPages URLs (NO secrets)
- `assets/site.js`, `assets/styles.css` — frontend behavior/styles

### Live/real integration vs demonstration

| Feature | Mode | What happens |
| --- | --- | --- |
| Webinar registration | Opens your *published* SFMC CloudPage URL | Smart Capture can save entries in its configured Data Extension |
| Appointment demo | Browser-side demonstration only | **Never stores or sends personal data** |
| Enquiry demo | Browser-side demonstration only | **Never stores or sends personal data** |
| Other CloudPages links | Not configured until you provide a published URL | Can later open real SFMC-hosted forms |

Please check the webinar URL in `assets/config.js` against the exact current URL of your published CloudPage.

## Deploy on GitHub Pages (website UI)

1. Log in to GitHub and create a new **public** repository such as `hospital360-marketing-cloud-demo`.
2. Upload **the files and the `assets/` folder at the root** of the repository. `index.html` must be at the root.
3. In the repository, choose **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, branch `main`, folder `/(root)`; **Save**.
5. GitHub will show the published URL, typically `https://YOUR-USERNAME.github.io/hospital360-marketing-cloud-demo/`.
6. Open and test navigation and the Webinar Registration button.

Alternatively, use `git clone`, copy these files, commit, and push to `main`.

## Configure SFMC CloudPages links

Open `assets/config.js` and supply only public, published, HTTPS CloudPages links:

```javascript
window.HOSPITAL_CONFIG = {
  webinarCloudPageUrl: 'https://your-published-cloudpage-url',
  enquiryCloudPageUrl: '',
  appointmentCloudPageUrl: '',
  preferencesCloudPageUrl: ''
};
```

The webinar CloudPage URL in this starter is based on the user's previously published practice page. If you republished or changed the form, update it.

When a visitor clicks a CloudPages link on this website, their browser **navigates to the Salesforce-hosted CloudPage**. Smart Capture can write to its selected Data Extension, and a configured CloudPages entry source can admit eligible contacts into Journey Builder.

**GitHub Pages is static hosting.** It has no backend and must not hold Salesforce access tokens, client secrets, API credentials, unprotected patient forms, or healthcare records. Do not call privileged Salesforce APIs directly from this website. For custom workflows, use an approved secure server-side integration or a properly secured CloudPages implementation. Use synthetic data in this demo.

## Next implementation lab

1. Test the webinar registration CTA with synthetic data.
2. Create `HSP_Enquiry_DE` (appropriate required fields and data retention).
3. Build and publish a CloudPages Smart Capture form for general nonclinical enquiries.
4. Paste the CloudPage URL into `enquiryCloudPageUrl`.
5. Test website → CloudPage → Data Extension.
6. Configure the eligible journey or CRM handoff separately.

For real hospital deployments, assess privacy law, consent, accessibility, security, patient authentication, and the contractual suitability of all systems before use. This is not production-ready software.
