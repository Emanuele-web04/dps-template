import * as React from 'react';
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Column,
  Section,
  Text,
} from '@react-email/components';
import { idFromEmail } from '@/lib/supabase';

export const ResubscribeEmailTemplate = async (data: { email: string }) => {
// Colors
  const main = '#0F172A';
  const secondary = '#64748B';
  const accent = '#3B82F6';
  const background = '#F8FAFC';
  const border = '#E2E8F0';

  const userId = await idFromEmail(data.email)
  // Social media links
  const socialLinks = [
    {
      href: 'https://twitter.com/yourcompany',
      alt: 'Twitter',
      icon: 'https://react-email-demo-bdj5iju9r-resend.vercel.app/static/twitter.png',
    },
    {
      href: 'https://instagram.com/yourcompany',
      alt: 'Instagram',
      icon: 'https://react-email-demo-bdj5iju9r-resend.vercel.app/static/instagram.png',
    },
    {
      href: 'https://linkedin.com/company/yourcompany',
      alt: 'LinkedIn',
      icon: 'https://react-email-demo-bdj5iju9r-resend.vercel.app/static/linkedin.png',
    },
  ];

  return (
    <Html>
      <Head />
      <Preview>Welcome back to our waitlist!</Preview>
      <Body style={{ backgroundColor: background, margin: '0', padding: '0', fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
        <Container style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
          {/* Logo */}
          <Section style={{ textAlign: 'center', padding: '20px 0' }}>
            <Img
              src="https://react-email-demo-bdj5iju9r-resend.vercel.app/static/logo.png"
              width="40"
              height="40"
              alt="Your Company"
            />
          </Section>
          
          {/* Main Content */}
          <Section style={{ 
            backgroundColor: '#ffffff', 
            border: `1px solid ${border}`,
            borderRadius: '8px',
            padding: '40px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.02)'
          }}>
            <Heading style={{ 
              fontSize: '24px', 
              fontWeight: '600',
              color: main,
              margin: '0 0 24px',
              padding: '0',
              textAlign: 'center' 
            }}>
              Welcome back!
            </Heading>
            
            <Text style={{ 
              fontSize: '16px', 
              lineHeight: '26px', 
              color: main,
              margin: '0 0 24px'
            }}>
              Hi {},
            </Text>
            
            <Text style={{ 
              fontSize: '16px', 
              lineHeight: '26px', 
              color: main,
              margin: '0 0 24px'
            }}>
              Welcome back to our waitlist! We're thrilled to have you rejoin us as we prepare for our upcoming launch.
            </Text>
            
            <Text style={{ 
              fontSize: '16px', 
              lineHeight: '26px', 
              color: main,
              margin: '0 0 24px'
            }}>
              Since you were away, we've been making exciting progress on our platform. Your spot has been secured and we'll notify you as soon as access becomes available.
            </Text>
            
            <Text style={{ 
              fontSize: '16px', 
              lineHeight: '26px', 
              color: main,
              margin: '0 0 32px'
            }}>
              Thank you for giving us another chance. Stay tuned for updates, and feel free to follow us on social media to see what we've been working on!
            </Text>
            
            <Text style={{ 
              fontSize: '16px', 
              lineHeight: '26px', 
              color: main,
              margin: '0 0 24px',
              fontWeight: '500'
            }}>
              The Team at YourCompany
            </Text>
          </Section>
          
          {/* Social Links */}
          <Section style={{ textAlign: 'center', padding: '32px 0 16px' }}>
            <Row>
              <Column align="center">
                {socialLinks.map((social, index) => (
                  <Link 
                    key={index}
                    href={social.href} 
                    style={{ display: 'inline-block', margin: '0 8px' }}
                  >
                    <Img 
                      src={social.icon} 
                      width="24" 
                      height="24" 
                      alt={social.alt} 
                      style={{ marginBottom: '8px' }}
                    />
                  </Link>
                ))}
              </Column>
            </Row>
            
            <Link
              href="https://yourcompany.com"
              style={{
                fontSize: '14px',
                color: secondary,
                textDecoration: 'none',
                marginTop: '12px',
                display: 'block'
              }}
            >
              Visit our website
            </Link>
          </Section>
          
          {/* Footer */}
          <Section style={{ textAlign: 'center', padding: '0 0 32px' }}>
            <Text style={{ 
              fontSize: '12px', 
              lineHeight: '20px', 
              color: secondary,
              margin: '0 0 8px'
            }}>
              © 2025 YourCompany, Inc. All rights reserved.
            </Text>
            
            <Text style={{ 
              fontSize: '12px', 
              lineHeight: '20px', 
              color: secondary,
              margin: '0'
            }}>
              123 Market St, Suite 100, San Francisco, CA 94103
            </Text>
            
            <Text style={{ 
              fontSize: '12px', 
              lineHeight: '20px', 
              color: secondary,
              margin: '16px 0 0'
            }}>
              <Link
                href={`https://waitlist.dpstemplates.com/unsubscribe/${userId}`}
                style={{
                  color: secondary,
                  textDecoration: 'underline',
                }}
              >
                Unsubscribe
              </Link>
              {' • '}
              <Link
                href="https://yourcompany.com/privacy"
                style={{
                  color: secondary,
                  textDecoration: 'underline',
                }}
              >
                Privacy Policy
              </Link>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default ResubscribeEmailTemplate;