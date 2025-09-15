import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import LoadingBar from "react-top-loading-bar";
import { motion } from "framer-motion";

function ContactForm() {
  const [loader, setLoader] = useState(false);
  const [isSent, setIsSent] = useState("");
  const [progress, setProgress] = useState(0);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: ""
  });
  const form = useRef();

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.user_name.trim()) {
      newErrors.user_name = "Name is required";
    } else if (formData.user_name.trim().length < 2) {
      newErrors.user_name = "Name must be at least 2 characters";
    }
    
    if (!formData.user_email.trim()) {
      newErrors.user_email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.user_email)) {
      newErrors.user_email = "Please enter a valid email address";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
    
    // Clear success message when user starts typing
    if (isSent) {
      setIsSent("");
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setLoader(true);
    setProgress(0);
    
    // Immediate progress update
    setTimeout(() => setProgress(20), 100);
    setTimeout(() => setProgress(40), 300);
    setTimeout(() => setProgress(60), 500);
    
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev < 80) return prev + 5;
        return prev;
      });
    }, 150);
    
    emailjs
      .sendForm("service_432r6nu", "template_6wh1fwg", form.current, {
        publicKey: "5eKi8kbIl9q1Pi-pD",
      })
      .then(
        () => {
          clearInterval(progressInterval);
          setProgress(100);
          setIsSent("Message sent successfully! I'll get back to you soon.");
          setFormData({ user_name: "", user_email: "", message: "" });
          setLoader(false);
          
          // Clear success message after 5 seconds
          setTimeout(() => {
            setIsSent("");
          }, 5000);
        },
        (error) => {
          clearInterval(progressInterval);
          setProgress(100);
          setLoader(false);
          
          // Handle specific EmailJS errors
          let errorMessage = "Failed to send message. Please try again or contact me directly.";
          let errorTitle = "Message Failed to Send";
          
          if (error.status === 422 && error.text?.includes("recipients address is empty")) {
            errorMessage = "Email service is temporarily unavailable. Please contact me directly at paulankita614@gmail.com";
            errorTitle = "Service Unavailable";
          } else if (error.status === 400) {
            errorMessage = "Invalid form data. Please check your inputs and try again.";
            errorTitle = "Invalid Data";
          } else if (error.status === 401) {
            errorMessage = "Email service authentication failed. Please contact me directly.";
            errorTitle = "Authentication Error";
          } else if (error.status === 403) {
            errorMessage = "Email service access denied. Please contact me directly at paulankita614@gmail.com";
            errorTitle = "Access Denied";
          } else if (error.status === 429) {
            errorMessage = "Too many requests. Please wait a moment and try again.";
            errorTitle = "Rate Limited";
          } else if (error.status === 500) {
            errorMessage = "Server error occurred. Please try again later or contact me directly.";
            errorTitle = "Server Error";
          }
          
          setIsSent(`${errorTitle}: ${errorMessage}`);
          console.error("EmailJS Error:", error);
          
          // Clear error message after 8 seconds (longer for error messages)
          setTimeout(() => {
            setIsSent("");
          }, 8000);
        }
      );
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col font-inter w-full mt-6 gap-6"
      >
        <LoadingBar
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
          color="#3b82f6"
          height={4}
          shadow={true}
          waitingTime={200}
        />
        
        {loader && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
              <div>
                <p className="text-blue-700 dark:text-blue-300 font-medium">Sending your message...</p>
                <p className="text-blue-600 dark:text-blue-400 text-sm">Please wait while we process your request</p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Name Field */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <label className="block text-gray-300 text-sm font-medium mb-2">
            Full Name *
          </label>
          <input
            type="text"
            name="user_name"
            value={formData.user_name}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg outline-none transition-all duration-300 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500/50 ${
              errors.user_name 
                ? 'border-red-500 focus:border-red-500' 
                : 'border-gray-600 focus:border-blue-500'
            }`}
            placeholder="Enter your full name"
          />
          {errors.user_name && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-400 text-xs mt-1 flex items-center gap-1"
            >
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {errors.user_name}
            </motion.p>
          )}
        </motion.div>

        {/* Email Field */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          <label className="block text-gray-300 text-sm font-medium mb-2">
            Email Address *
          </label>
          <input
            type="email"
            name="user_email"
            value={formData.user_email}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg outline-none transition-all duration-300 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500/50 ${
              errors.user_email 
                ? 'border-red-500 focus:border-red-500' 
                : 'border-gray-600 focus:border-blue-500'
            }`}
            placeholder="your.email@example.com"
          />
          {errors.user_email && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-400 text-xs mt-1 flex items-center gap-1"
            >
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {errors.user_email}
            </motion.p>
          )}
        </motion.div>

        {/* Message Field */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative"
        >
          <label className="block text-gray-300 text-sm font-medium mb-2">
            Message *
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={5}
            className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg outline-none transition-all duration-300 text-white placeholder-gray-400 resize-none focus:ring-2 focus:ring-blue-500/50 ${
              errors.message 
                ? 'border-red-500 focus:border-red-500' 
                : 'border-gray-600 focus:border-blue-500'
            }`}
            placeholder="Tell me about your project, ideas, or just say hello..."
          />
          <div className="flex justify-between items-center mt-1">
            {errors.message ? (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-400 text-xs flex items-center gap-1"
              >
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                {errors.message}
              </motion.p>
            ) : (
              <span></span>
            )}
            <span className="text-xs text-gray-500">
              {formData.message.length}/500
            </span>
          </div>
        </motion.div>

        {/* Status Message */}
        {isSent && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className={`p-6 rounded-xl border-2 text-sm flex items-start gap-4 shadow-lg ${
              isSent.includes('successfully') 
                ? 'bg-green-50 dark:bg-green-900/20 border-green-500 text-green-700 dark:text-green-300' 
                : 'bg-red-50 dark:bg-red-900/20 border-red-500 text-red-700 dark:text-red-300'
            }`}
          >
            <div className="flex-shrink-0">
              {isSent.includes('successfully') ? (
                <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
              ) : (
                <div className="w-8 h-8 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-red-600 dark:text-red-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>
            <div className="flex-1">
              <h4 className={`font-semibold mb-1 ${
                isSent.includes('successfully') 
                  ? 'text-green-800 dark:text-green-200' 
                  : 'text-red-800 dark:text-red-200'
              }`}>
                {isSent.includes('successfully') 
                  ? 'Message Sent Successfully!' 
                  : isSent.includes(':') 
                    ? isSent.split(':')[0] 
                    : 'Message Failed to Send'
                }
              </h4>
              <p className="text-sm leading-relaxed">
                {isSent.includes(':') ? isSent.split(':').slice(1).join(':').trim() : isSent}
              </p>
              {!isSent.includes('successfully') && (
                <div className="mt-3 pt-3 border-t border-red-200 dark:border-red-700">
                  <p className="text-xs text-red-600 dark:text-red-400 mb-2">
                    <strong>Alternative contact methods:</strong>
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <a
                      href="mailto:paulankita614@gmail.com"
                      className="inline-flex items-center gap-1 px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-md text-xs hover:bg-red-200 dark:hover:bg-red-900/50 transition-colors"
                    >
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      Email Directly
                    </a>
                    <a
                      href="https://www.linkedin.com/in/angkita-paul"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-md text-xs hover:bg-red-200 dark:hover:bg-red-900/50 transition-colors"
                    >
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                      </svg>
                      LinkedIn
                    </a>
                  </div>
                </div>
              )}
            </div>
            <button
              onClick={() => setIsSent("")}
              className="flex-shrink-0 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        )}

        {/* Submit Button */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={loader}
            className={`relative px-8 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 min-w-[140px] justify-center ${
              loader
                ? 'bg-gray-600 cursor-not-allowed'
                : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:shadow-lg hover:shadow-blue-500/25'
            } text-white`}
          >
            {loader ? (
              <>
                <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </>
            ) : (
              <>
                Send Message
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                  />
                </svg>
              </>
            )}
          </motion.button>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center pt-4 border-t border-gray-700"
        >
          <p className="text-gray-400 text-sm mb-2">
            Prefer direct contact?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
            <a
              href="mailto:paulankita614@gmail.com"
              className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              paulankita614@gmail.com
            </a>
            <span className="text-gray-600 hidden sm:inline">•</span>
            <a
              href="https://www.linkedin.com/in/angkita-paul"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
              </svg>
              LinkedIn
            </a>
          </div>
        </motion.div>
      </form>
    </div>
  );
}

export default ContactForm;