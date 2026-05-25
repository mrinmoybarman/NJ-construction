<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Us - NJ Construction</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body>
    
    <?php include 'component/header.php'; ?>

    <!-- Page Header -->
    <section class="page-header">
        <h1>Contact Us</h1>
        <p>Get In Touch With Our Team</p>
    </section>

    <!-- Contact Section -->
    <section class="contact-section">
        <div class="container">
            <div class="contact-content">
                <!-- Contact Information -->
                <div class="contact-info">
                    <h2>Contact Information</h2>
                    
                    <div class="info-item">
                        <div class="info-icon">
                            <i class="fas fa-map-marker-alt"></i>
                        </div>
                        <div class="info-text">
                            <h4>Address</h4>
                            <p>123 Construction Avenue<br>New Jersey, NJ 08001<br>United States</p>
                        </div>
                    </div>

                    <div class="info-item">
                        <div class="info-icon">
                            <i class="fas fa-phone"></i>
                        </div>
                        <div class="info-text">
                            <h4>Phone</h4>
                            <p>Main: +1 (555) 123-4567<br>Emergency: +1 (555) 987-6543</p>
                        </div>
                    </div>

                    <div class="info-item">
                        <div class="info-icon">
                            <i class="fas fa-envelope"></i>
                        </div>
                        <div class="info-text">
                            <h4>Email</h4>
                            <p>info@njconstruction.com<br>projects@njconstruction.com</p>
                        </div>
                    </div>

                    <div class="info-item">
                        <div class="info-icon">
                            <i class="fas fa-clock"></i>
                        </div>
                        <div class="info-text">
                            <h4>Business Hours</h4>
                            <p>Monday - Friday: 8:00 AM - 6:00 PM<br>Saturday: 9:00 AM - 4:00 PM<br>Sunday: Closed</p>
                        </div>
                    </div>

                    <div class="social-section">
                        <h4>Follow Us</h4>
                        <div class="social-links">
                            <a href="#" class="social-icon"><i class="fab fa-facebook"></i></a>
                            <a href="#" class="social-icon"><i class="fab fa-twitter"></i></a>
                            <a href="#" class="social-icon"><i class="fab fa-instagram"></i></a>
                            <a href="#" class="social-icon"><i class="fab fa-linkedin"></i></a>
                            <a href="#" class="social-icon"><i class="fab fa-youtube"></i></a>
                        </div>
                    </div>
                </div>

                <!-- Contact Form -->
                <div class="contact-form-container">
                    <h2>Send us a Message</h2>
                    <form class="contact-form" id="contactForm">
                        <div class="form-group">
                            <input type="text" placeholder="Your Name" required>
                        </div>

                        <div class="form-group">
                            <input type="email" placeholder="Your Email" required>
                        </div>

                        <div class="form-group">
                            <input type="tel" placeholder="Your Phone Number" required>
                        </div>

                        <div class="form-group">
                            <select required>
                                <option value="">Select Service</option>
                                <option value="residential">Residential Construction</option>
                                <option value="commercial">Commercial Construction</option>
                                <option value="interior">Interior Design</option>
                                <option value="renovations">Renovations</option>
                                <option value="consultation">General Consultation</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <input type="text" placeholder="Project Title">
                        </div>

                        <div class="form-group">
                            <textarea placeholder="Tell us about your project..." rows="5" required></textarea>
                        </div>

                        <button type="submit" class="btn btn-primary">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <!-- Map Section (Placeholder) -->
    <section class="map-section">
        <div class="map-container">
            <div class="map-placeholder" style="background: linear-gradient(135deg, #D4AF37, #C9A961); display: flex; align-items: center; justify-content: center; color: white; font-size: 24px;">
                <i class="fas fa-map" style="margin-right: 10px;"></i>Interactive Map (Add Your Location)
            </div>
        </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq-section">
        <div class="container">
            <h2>Frequently Asked Questions</h2>
            <div class="faq-grid">
                <div class="faq-item">
                    <h4>How do I get a free quote?</h4>
                    <p>Contact us through this form, call us, or visit our office. We provide free consultations and detailed quotes for all projects.</p>
                </div>
                <div class="faq-item">
                    <h4>What is your project timeline?</h4>
                    <p>Project duration depends on complexity and scope. We'll provide a detailed timeline during the consultation phase.</p>
                </div>
                <div class="faq-item">
                    <h4>Do you offer warranties?</h4>
                    <p>Yes, we offer comprehensive warranties on all our work. Details vary by project type and will be discussed during consultation.</p>
                </div>
                <div class="faq-item">
                    <h4>What areas do you serve?</h4>
                    <p>We primarily serve New Jersey and surrounding areas. Contact us to discuss your specific location.</p>
                </div>
                <div class="faq-item">
                    <h4>Can you work within my budget?</h4>
                    <p>Absolutely! We specialize in delivering quality at competitive prices. We'll work with you to optimize your budget.</p>
                </div>
                <div class="faq-item">
                    <h4>Do you handle permits?</h4>
                    <p>Yes, we manage all necessary permits and approvals. This is included in our comprehensive project management.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="cta">
        <div class="container">
            <h2>Ready to Start Your Project?</h2>
            <p>Don't wait, reach out today and let's bring your vision to life</p>
            <a href="#contactForm" class="btn btn-primary">Send us a Message</a>
        </div>
    </section>

    <?php include 'component/footer.php'; ?>

    <script src="script.js"></script>
</body>
</html>