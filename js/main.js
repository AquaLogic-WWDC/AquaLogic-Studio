// Common Legal Data
const privacyContent = `
    <p>Effective Date: 19/04/2026 Last Updated: 19/04/2026</p>
    <p>Welcome to <strong>AquaLogic Studio</strong>. This Privacy Policy explains how we collect, use, and safeguard information when you use our mobile applications.</p>
    <p>By using our Apps, you agree to the collection and use of information in accordance with this Privacy Policy.</p>
    
    <h3>1. Information We Collect</h3>
    <p>Our Apps do not require account registration. However, certain information may be collected automatically.</p>
    
    <h4>A. Automatically Collected Information</h4>
    <ul>
        <li>Device type and model</li>
        <li>Operating system version</li>
        <li>App usage statistics</li>
        <li>IP address</li>
        <li>Advertising ID (e.g., Google Advertising ID)</li>
        <li>Crash logs and diagnostics</li>
    </ul>
    <p>This information is used to improve app performance and user experience.</p>
    
    <h4>B. Advertising (Google AdMob)</h4>
    <p>App uses Google AdMob to display advertisements.</p>
    <p>AdMob may collect: Device identifiers, Advertising ID, Approximate location (based on IP address), App interaction data, and Ad performance data.</p>
    <p>This data may be used to show personalized or non-personalized ads and measure advertising performance.</p>
    <p>For more information, please review Google’s Privacy Policy: <a href="https://policies.google.com/privacy" target="_blank">https://policies.google.com/privacy</a></p>
    
    <h3>2. How We Use Information</h3>
    <ul>
        <li>To provide and maintain the App</li>
        <li>To improve performance and stability</li>
        <li>To display advertisements</li>
        <li>To analyze app usage trends</li>
        <li>To prevent fraud and misuse</li>
    </ul>
    <p>We do not sell personal data.</p>
    
    <h3>3. Personalized Advertising & User Choices</h3>
    <p>Depending on your region, you may see personalized or non-personalized ads. You can manage advertising preferences by resetting your Advertising ID in device settings or opting out in your Google account settings.</p>
    
    <h3>4. Children's Privacy</h3>
    <p>Our Apps are general audience applications and are not specifically directed at children under 13. We do not knowingly collect personal information from children.</p>
    
    <h3>5. Contact Us</h3>
    <p>If you have questions about this Privacy Policy, please contact: <strong>aquacoderwwdc@gmail.com</strong></p>
    
    <p class="mt-4 small text-secondary">© 2026 AquaLogic Studio. All Rights Reserved.</p>
`;

const termsContent = `
    <p>Effective Date: 19/04/2026 Last Updated: 19/04/2026</p>
    <p>Welcome to <strong>AquaLogic Studio Apps</strong>. By downloading, installing, or using our mobile applications, you agree to these Terms and Conditions. If you do not agree, please discontinue use of the App.</p>
    
    <h3>1. Description of Service</h3>
    <p>AquaLogic Studio provides free-to-play puzzle and logic applications. Our services are supported through advertisements. We reserve the right to modify or discontinue features at any time without notice.</p>
    
    <h3>2. General Use</h3>
    <p>Our Apps are general-audience applications available to users worldwide. By using our Apps, you confirm that you are legally permitted to use mobile applications under the laws of your country.</p>
    
    <h3>3. Advertisements (Google AdMob)</h3>
    <p>The App displays advertisements provided by third-party advertising partners, including Google AdMob. By using the App, you acknowledge that advertising partners may collect device information and usage data.</p>
    
    <h3>4. Intellectual Property Rights</h3>
    <p>All content within our Apps, including gameplay logic, graphics, logos, branding, and app design, is owned by or licensed to <strong>AquaLogic Studio</strong> and protected by applicable intellectual property laws.</p>
    <p>Our Apps are provided for personal, non-commercial use only. You may not reproduce, redistribute, sell, or commercially exploit any content from the App.</p>
    
    <h3>5. Acceptable Use</h3>
    <p>You agree not to use the App for unlawful purposes, attempt to hack or reverse engineer the App, or interfere with the security or proper functioning of the App.</p>
    
    <h3>6. Privacy</h3>
    <p>Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect user data.</p>
    
    <h3>7. Disclaimer of Warranties</h3>
    <p>The App is provided on an "AS IS" and "AS AVAILABLE" basis without warranties of any kind. We do not guarantee continuous availability or error-free performance.</p>
    
    <h3>8. Limitation of Liability</h3>
    <p>To the maximum extent permitted by law, AquaLogic Studio shall not be liable for indirect or consequential damages resulting from the use of the App.</p>
    
    <h3>9. Contact Information</h3>
    <p>If you have questions regarding these Terms, contact: <strong>aquacoderwwdc@gmail.com</strong></p>
    
    <p class="mt-4 small text-secondary">© 2026 AquaLogic Studio. All Rights Reserved.</p>
`;

// Initialize legal page logic
function initLegalPages() {
    const legalView = document.getElementById('legal-content-view');
    if (!legalView) return;

    const isTermsPage = window.location.pathname.includes('terms');
    legalView.innerHTML = isTermsPage ? termsContent : privacyContent;
}

// Contact Form Handling
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const product = contactForm.querySelector('select').value || 'General Inquiry';
        const message = contactForm.querySelector('textarea').value;

        const subject = encodeURIComponent(`Support Request: ${product} from ${name}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nProduct: ${product}\n\nMessage:\n${message}`);
        
        // Construct mailto link
        const mailtoLink = `mailto:aquacoderwwdc@gmail.com?subject=${subject}&body=${body}`;
        
        // Open user's email client
        window.location.href = mailtoLink;

        alert('Your email client will now open with your message. Please click "Send" in your email app to finish.');
        contactForm.reset();
    });
}

// Global Initialization
document.addEventListener('DOMContentLoaded', () => {
    initLegalPages();
    initContactForm();

    // Fade in animation for cards
    const cards = document.querySelectorAll('.glass-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });
});
