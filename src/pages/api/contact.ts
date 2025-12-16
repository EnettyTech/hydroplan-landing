import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

type ResponseData = {
  message: string;
  success: boolean;
};

type ContactFormData = {
  fullName: string;
  email: string;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed",
    });
  }

  try {
    const { fullName, email, message }: ContactFormData = req.body;

    // Validate required fields
    if (!fullName || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email format",
      });
    }

    // Create contacts directory if it doesn't exist
    const contactsDir = path.join(process.cwd(), "contacts");
    if (!fs.existsSync(contactsDir)) {
      fs.mkdirSync(contactsDir, { recursive: true });
    }

    // Generate filename with timestamp
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    const filename = `contact_${timestamp}.txt`;
    const filePath = path.join(contactsDir, filename);

    // Format content for the text file
    const content = `
===========================================
CONTACT FORM SUBMISSION
===========================================

Date & Time: ${new Date().toLocaleString("en-US", {
      timeZone: "Asia/Ho_Chi_Minh",
      dateStyle: "full",
      timeStyle: "long",
    })}

-------------------------------------------
CONTACT INFORMATION
-------------------------------------------

Full Name: ${fullName}
Email: ${email}

-------------------------------------------
MESSAGE
-------------------------------------------

${message}

===========================================
End of Submission
===========================================
`;

    // Write to file
    fs.writeFileSync(filePath, content.trim(), "utf-8");

    console.log(`Contact form saved to: ${filePath}`);

    return res.status(200).json({
      success: true,
      message: "Contact form submitted successfully",
    });
  } catch (error) {
    console.error("Error saving contact form:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to save contact form. Please try again later.",
    });
  }
}

