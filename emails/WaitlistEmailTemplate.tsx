import * as React from 'react';
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Row,
  Column,
  Section,
  Text,
} from '@react-email/components';
import { idFromEmail } from '@/lib/supabase';

export const WaitlistEmailTemplate = async (data: { email: string }) => {
  // Colors
  const main = '#0F172A';
  const secondary = '#64748B';
  const accent = '#3B82F6';
  const background = '#F8FAFC';
  const border = '#E2E8F0';

  const userId = await idFromEmail(data.email);

  return (
    <Html>
      <Head />
      <Preview>Thanks for joining our waitlist!</Preview>
      <Body style={{ 
        backgroundColor: background, 
        margin: '0', 
        padding: '0', 
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        width: '100%'
      }}>
        <Container style={{ 
          maxWidth: '600px', 
          margin: '0 auto', 
          padding: '20px',
          width: '100%'
        }}>
          
          {/* Logo Section con fallback testuale */}
          <Section style={{ 
            textAlign: 'center', 
            padding: '20px 0',
            backgroundColor: '#ffffff',
            borderRadius: '8px 8px 0 0',
            border: `1px solid ${border}`,
            borderBottom: 'none'
          }}>
            <Text style={{
              fontSize: '24px',
              fontWeight: '700',
              color: accent,
              margin: '0',
              letterSpacing: '-0.5px'
            }}>
              DP's Templates
            </Text>
            <Text style={{
              fontSize: '12px',
              color: secondary,
              margin: '4px 0 0',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>
              Design Studio
            </Text>
          </Section>
          
          {/* Main Content */}
          <Section style={{ 
            backgroundColor: '#ffffff', 
            border: `1px solid ${border}`,
            borderRadius: '0 0 8px 8px',
            padding: '40px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.02)',
            borderTop: 'none'
          }}>
            <Heading style={{ 
              fontSize: '24px', 
              fontWeight: '700',
              color: main,
              margin: '0 0 24px',
              padding: '0',
              textAlign: 'center',
              lineHeight: '1.2'
            }}>
              🎉 You're on the waitlist!
            </Heading>
            
            <Text style={{ 
              fontSize: '16px', 
              lineHeight: '26px', 
              color: main,
              margin: '0 0 24px'
            }}>
              Hi there,
            </Text>
            
            <Text style={{ 
              fontSize: '16px', 
              lineHeight: '26px', 
              color: main,
              margin: '0 0 24px'
            }}>
              Thank you for joining our waitlist! We're working hard to launch soon and we're excited to have you on board.
            </Text>
            
            <Text style={{ 
              fontSize: '16px', 
              lineHeight: '26px', 
              color: main,
              margin: '0 0 32px'
            }}>
              We'll be in touch when it's your turn to get access to our platform. In the meantime, feel free to check out our website and social media for updates.
            </Text>

            {/* Call to Action Button */}
            <Section style={{ textAlign: 'center', margin: '32px 0' }}>
              <Link
                href="https://dpstemplates.com"
                style={{
                  backgroundColor: accent,
                  color: '#ffffff',
                  padding: '12px 24px',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  fontSize: '16px',
                  fontWeight: '600',
                  display: 'inline-block'
                }}
              >
                Visit Our Website
              </Link>
            </Section>
            
            <Text style={{ 
              fontSize: '16px', 
              lineHeight: '26px', 
              color: main,
              margin: '24px 0 0',
              fontWeight: '500'
            }}>
              Best regards,<br />
              The Team at DP's Templates
            </Text>
          </Section>
          
          {/* Social Links - Solo testo per evitare problemi con immagini */}
          <Section style={{ 
            textAlign: 'center', 
            padding: '32px 0 16px',
            backgroundColor: '#ffffff',
            borderRadius: '8px',
            border: `1px solid ${border}`,
            margin: '16px 0'
          }}>
            <Text style={{
              fontSize: '14px',
              color: secondary,
              margin: '0 0 16px',
              fontWeight: '500'
            }}>
              Follow us for updates:
            </Text>
            <Row>
              <Column align="center">
                <Link 
                  href="https://x.com/emanueledpt"
                  style={{ 
                    color: accent,
                    textDecoration: 'none',
                    fontSize: '14px',
                    fontWeight: '500',
                    margin: '0 12px',
                    display: 'inline-block'
                  }}
                >
                  Twitter/X
                </Link>
                <Link 
                  href="https://www.instagram.com/emanueledpt?igsh=MWs4emhhN2ZpZzAweQ=="
                  style={{ 
                    color: accent,
                    textDecoration: 'none',
                    fontSize: '14px',
                    fontWeight: '500',
                    margin: '0 12px',
                    display: 'inline-block'
                  }}
                >
                  Instagram
                </Link>
                <Link 
                  href="https://www.linkedin.com/in/emanuele-di-pietro-12b464284/"
                  style={{ 
                    color: accent,
                    textDecoration: 'none',
                    fontSize: '14px',
                    fontWeight: '500',
                    margin: '0 12px',
                    display: 'inline-block'
                  }}
                >
                  LinkedIn
                </Link>
              </Column>
            </Row>
          </Section>
          
          {/* Footer */}
          <Section style={{ textAlign: 'center', padding: '16px 0 32px' }}>
            <Text style={{ 
              fontSize: '12px', 
              lineHeight: '20px', 
              color: secondary,
              margin: '0 0 8px'
            }}>
              © 2025 DP's Templates, Emanuele Di Pietro. All rights reserved.
            </Text>
            
            <Text style={{ 
              fontSize: '12px', 
              lineHeight: '20px', 
              color: secondary,
              margin: '8px 0 0'
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
                href="https://dpstemplates.com/contact"
                style={{
                  color: secondary,
                  textDecoration: 'underline',
                }}
              >
                Contact Us
              </Link>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default WaitlistEmailTemplate;