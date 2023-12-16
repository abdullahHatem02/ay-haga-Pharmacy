# Project Title: Vite Meds Pharmacy (ay-haga-Pharmacy)

## Motivation

Vite Meds, an online pharmaceutical ecommerce platform, is developed to streamline prescription management and improve patient accessibility to medications. This innovative solution significantly enhances the efficiency of the healthcare system by offering a user-friendly interface for both patients and healthcare providers. By simplifying the process of obtaining prescription medications, it reduces waiting/commute time and potential errors associated with traditional pharmacy visits. Vite Meds offers a wide range of products, including over-the-counter medications, making it a one-stop shop for everything health related. The platform's secure and confidential handling of patient data ensures privacy and trust, while its 24/7 availability offers unparalleled convenience, particularly for those with mobility issues or living in remote areas. Overall, Vite Meds represents a significant leap forward in making healthcare more accessible, efficient, and patient-centered.

## Build Status

Passing - All tests successful as of 16/12/2023.

## Code Style

Adhering to the Prettier code formatter for JavaScript. This project was built by utilizing a modern JavaScript ES6+ style in our code, combined with React functional components and Redux for state management. This approach reflects a preference for a scalable and efficient web application development. It features arrow functions, template literals, and React hooks like useState and useEffect, along with Redux's useDispatch and useSelector for state management. The project code demonstrates a structured and modular component architecture, as seen in the various component and action imports. Additionally, Next.js features were incorporated, such as optimized image handling, client-side directives and file path aliases to maintain an organized and effective development process.

## Screenshots

(Include a few screenshots or a video link showcasing the system.)

## Tech/Framework Used

Built with: React.js, Next.js, Node.js, MongoDB, Tailwind CSS, Tremor, CSS, HTML.

## Features

- Guest can sign up to be a patient
- Guest can apply to be a pharmacist
- Guest can learn more about ViteMeds through the Home and Policy pages
- Patient can browse medicines
- Patient can Add medicine to cart
- Patient can view cart
- Patient can checkout and pay using wallet or stripe
- Pharmacists can edit existing medicines or add new ones
- Pharmacists can monitor pharmacy medicines
- Admins can manage Patient & Pharmacist accounts
- Admins can review pharmacist applications
- Admins can monitor pharmacy medicines

## Code Examples

(Provide code snippets demonstrating key functionalities.)

## Installation (??)

'npm i' -- install all project dependencies
'cd backend' & 'npm i' -- install all backend dependencies
'cd newfrontend' & 'npm i' -- install all frontend dependencies

'cd backend' & 'nodemon server' -- to run the backend
'cd newfrontend' & 'npm run dev' -- to run the frontend

you will now find the project frontend running on "localhost:3000/" & backend running on "localhost:3001/"

## API References

MailTrap -- Testing alert emails & transactional emails
MailJet -- Implementating alert emails & transactional emails
Stripe -- creditcard payment gateway

## Tests

We use Jest for unit testing and Cypress for end-to-end testing. Detailed instructions on running tests are provided.

## How to Use

User guide for navigating the platform, managing accounts, purchasing medicines, and using the pharmacist and admin panels.
Guest User:
As a Guest at the landing page, you can browse Homepage & policies through the navbar & footer 'home' & 'policy' links, as well as login/signup through the buttons in the navbar. You can also apply to be a ViteMeds pharmacist through the careers link! If you are a registered user but can't remember your password you can also reset your password through our login page.

Patient:
As a logged in patient, you can navigate your user-profile, and change your password if needed. You can also browse our collection of medicines, view details of each individual medicine and even get recommended alternatives in the case that the medicine you were looking for is sold out. A patient can add medicines to their cart, view their cart and checkout using our either the patient wallet or the stripe payment gateway.

Pharmacist:
As a logged in patient, you can navigate your user-profile, and change your password if needed. You can browse the pharmacy's medicines, edit existing medicines, or add new ones. A pharmacist can also access sales reports data and get a breakdown of all past orders as well as a summary.

Admin:
As a logged in admin, you can manage/remove patient & pharmacist users, as well as review pharmacist applications, manage existing admins or create new ones. You can also change your password if needed. You can browse the pharmacy's medicines and view limited details of each product. An admin can also access sales reports data and get a breakdown of all past orders as well as a summary.

## Contribute

Contribution guidelines including code standards, pull request process, and issue reporting instructions.

## Credits

Thanks to contributors, third-party libraries, and APIs used in this project.

## License

This project is licensed under the Apache 2.0 License.

## Comments

Future plans include integration with healthcare systems and expanding the medicine database.
