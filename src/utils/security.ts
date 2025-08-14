import DOMPurify from 'dompurify';

// Rate limiting storage
const emailSubmissions = new Map<string, number[]>();

/**
 * Sanitizes user input to prevent XSS attacks
 */
export const sanitizeInput = (input: string): string => {
  return DOMPurify.sanitize(input, { ALLOWED_TAGS: [] });
};

/**
 * Validates email format
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Rate limiting for email submissions
 * Allows max 3 submissions per IP per hour
 */
export const checkRateLimit = (identifier: string): boolean => {
  const now = Date.now();
  const hourAgo = now - (60 * 60 * 1000); // 1 hour ago
  
  // Get existing submissions for this identifier
  const submissions = emailSubmissions.get(identifier) || [];
  
  // Filter out submissions older than 1 hour
  const recentSubmissions = submissions.filter(time => time > hourAgo);
  
  // Check if under rate limit (max 3 per hour)
  if (recentSubmissions.length >= 3) {
    return false;
  }
  
  // Add current submission and update storage
  recentSubmissions.push(now);
  emailSubmissions.set(identifier, recentSubmissions);
  
  return true;
};

/**
 * Validates form data
 */
export const validateFormData = (data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];
  
  // Check required fields
  if (!data.name.trim()) errors.push('Name is required');
  if (!data.email.trim()) errors.push('Email is required');
  if (!data.message.trim()) errors.push('Message is required');
  
  // Validate email format
  if (data.email && !isValidEmail(data.email)) {
    errors.push('Please enter a valid email address');
  }
  
  // Check length limits
  if (data.name.length > 100) errors.push('Name must be less than 100 characters');
  if (data.subject.length > 200) errors.push('Subject must be less than 200 characters');
  if (data.message.length > 1000) errors.push('Message must be less than 1000 characters');
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

/**
 * Logs security events (can be extended to send to monitoring service)
 */
export const logSecurityEvent = (event: string, details: any) => {
  console.warn(`Security Event: ${event}`, {
    timestamp: new Date().toISOString(),
    userAgent: navigator.userAgent,
    ...details
  });
};