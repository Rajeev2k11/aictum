import React from "react";

const PrivacyPolicy = () => (
  <section className="min-h-screen py-12 px-4 sm:px-8 md:px-16 lg:px-32 bg-gradient-to-br from-[#d5cee0e7] via-[#fdfbff] to-[#32124d] mt-24 md:mt-20">
    <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-6 sm:p-10 border border-purple-900/20">
      <h1 className="text-3xl md:text-4xl font-bold text-purple-900 mb-6 text-center">
        Privacy Policy
      </h1>
      <p className="text-gray-700 mb-6 text-base md:text-lg">
        <strong>Last updated:</strong> May 29, 2025
      </p>
      <p className="text-gray-700 mb-6">
        At Aictum Pvt. Ltd, your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
      </p>

      <h2 className="text-xl font-semibold text-purple-900 mt-8 mb-3">1. Information We Collect</h2>
      <ul className="list-disc pl-6 text-gray-700 mb-6">
        <li>Personal identification information (Name, email address, phone number, etc.)</li>
        <li>Usage data (pages visited, time spent, browser type, etc.)</li>
        <li>Cookies and tracking technologies</li>
      </ul>

      <h2 className="text-xl font-semibold text-purple-900 mt-8 mb-3">2. How We Use Your Information</h2>
      <ul className="list-disc pl-6 text-gray-700 mb-6">
        <li>To provide and maintain our services</li>
        <li>To improve user experience and our website</li>
        <li>To communicate with you about updates, offers, or support</li>
        <li>To comply with legal obligations</li>
      </ul>

      <h2 className="text-xl font-semibold text-purple-900 mt-8 mb-3">3. Information Sharing</h2>
      <p className="text-gray-700 mb-6">
        We do not sell or rent your personal information. We may share information with trusted third parties who assist us in operating our website and conducting our business, as long as those parties agree to keep this information confidential.
      </p>

      <h2 className="text-xl font-semibold text-purple-900 mt-8 mb-3">4. Data Security</h2>
      <p className="text-gray-700 mb-6">
        We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure.
      </p>

      <h2 className="text-xl font-semibold text-purple-900 mt-8 mb-3">5. Your Rights</h2>
      <p className="text-gray-700 mb-6">
        You have the right to access, update, or delete your personal information. To exercise these rights, please contact us at <a href="mailto:team@aictum.com" className="text-[#9345E0] underline">team@aictum.com</a>.
      </p>

      <h2 className="text-xl font-semibold text-purple-900 mt-8 mb-3">6. Changes to This Policy</h2>
      <p className="text-gray-700 mb-6">
        We may update our Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.
      </p>

      <h2 className="text-xl font-semibold text-purple-900 mt-8 mb-3">7. Contact Us</h2>
      <p className="text-gray-700">
        If you have any questions about this Privacy Policy, please contact us at <a href="mailto:team@aictum.com" className="text-[#9345E0] underline">team@aictum.com</a>.
      </p>
    </div>
  </section>
);

export default PrivacyPolicy;