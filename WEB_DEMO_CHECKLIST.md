# Web Demo Checklist

Use this checklist when demonstrating Liu Menghan's web development work.

1. Open the homepage and show the Hero title: `A Dog's Intelligence - Professional Dog Care`.
2. Click each navigation item and show that it moves to the correct page section.
3. Show the About Us section and explain that it introduces the local Palmerston North service.
4. Show the four service cards: grooming, behaviour training, daycare and vacation boarding.
5. Show the four Service Promise bullet points.
6. Show the three customer testimonials.
7. Click the email link and show that it uses `mailto:info@adogsintelligence.nz`.
8. Enter a name and email in the enquiry form, choose a service and submit it.
9. Resize the browser to a mobile width and demonstrate the Menu button and one-column layout.
10. Point out the skip link, unordered navigation list, form labels, readable contrast and responsive layout.
11. Show the SPCA pet care advice link in the footer.
12. Press Tab after opening the page and confirm that Skip to main content appears. Press Enter to jump to the main content.
13. Confirm that the dog image still loads without access to Unsplash.
14. Check empty and invalid email fields, then submit valid fields. Explain that the form displays a message but does not send data.

## Short speaking notes

## Review verification on 10 October 2026

Check the index.html and styles.css in this folder, not another project copy.

1. Navigation: nav contains one ul and six li elements. CSS lays out nav ul horizontally on desktop and vertically on mobile.
2. Skip link: class="skip-link" and href="#main" match main id="main". The main element has tabindex="-1" to support keyboard focus after the jump.
3. Link states: styles.css defines a:visited and a:hover, with separate button and footer rules.
4. Local hero image: img.dog-image uses src="images/happy-dog.jpg". The JPEG is included in this folder. No remote image URL is used by index.html.
5. Useful external link: the footer links to https://www.spca.nz/advice-and-welfare.
6. Landmarks: header has role="banner", nav has role="navigation", main has role="main", and footer has role="contentinfo".

The main id does not need to be named main-content. The skip link and main id must match; both use main in this project.

## Presentation notes

I designed the Sample Page Layout for A Dog's Intelligence using a Jello layout. The page has a centred maximum width and changes to a single-column layout on smaller screens. Navy communicates trust, teal communicates calm care, coral highlights friendly actions and yellow adds energy. The page uses short paragraphs, bullet points, clear navigation, customer testimonials and direct contact guidance. I also added form labels, a skip link and a responsive mobile menu to support accessibility and usability.
