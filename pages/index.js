import React, { useState, useEffect, useRef } from "react";
import Link from 'next/link';
import Head from 'next/head';

export default function Home() {
  const initialState = () => [
    {
        id: 1,
        image: 'https://cms.recordedfuture.com/uploads/product_threats_ransomware_header_f3e3ea6261.jpg',
        title: 'Ransomware',
        description: 'Ransomware methods continue to evolve and multiply, with tactics, techniques, and procedures (TTPs) changing constantly. Recorded Future proactively keeps tabs on these trends, providing intelligence to help you proactively detect, hunt, and monitor ransomware attacks.',

    },
    {
        id: 2,
        image: 'https://cms.recordedfuture.com/uploads/platform_threats_state_sponsored_bc5ba64140.jpg?w=1920',
        title: 'State-Sponsored Attacks',
        description: 'State-sponsored cyber actors aggressively target networks in order to conduct espionage and compromise, steal, alter, or destroy information. These actors go to great lengths to remain undetected. Intelligence brings them out of the shadows, providing insight into who they are, how they operate, and how they can be stopped.',

    },
    {
        id: 3,
        image: 'https://cms.recordedfuture.com/uploads/platform_threats_phishing_75e06a3d2f.jpg?w=1920',
        title: 'Phishing',
        description: 'Millions of phishing emails are sent every day, targeting your employees and customers. Human error opens the door for attackers to gain network access, and move freely while exfiltrating critical data. Intelligence helps you track phishing campaigns, and the infrastructure used to deliver malware, allowing you to accelerate your investigations and defend against future attacks.',

    },
    {
        id: 4,
        image: 'https://cms.recordedfuture.com/uploads/platform_threats_supply_third_party_ee98a81ac8.jpg?w=1920',
        title: 'Supply and Third-Party Risk',
        description: 'Adversaries are continuously targeting third parties, suppliers, and vendors to launch software supply chain attacks, disrupt physical facilities, deploy ransomware, and more. Intelligence helps you to quickly identify and proactively mitigate supply chain risk before the damage is done.',

    },
    {
        id: 5,
        image: 'https://cms.recordedfuture.com/uploads/platform_threats_dark_web_monitoring_5f3d9aa99d.jpg?w=1920',
        title: 'Dark Web Monitoring',
        description: 'The dark web is a marketplace for emerging cyber threats, and a rich source of intelligence that is often relevant to a broad spectrum of potential targets. Our machine learning and natural language processing instantly creates links from sites on the dark web to other threat sources, enabling you to more quickly identify, profile, and mitigate risks to your organization.',

    },
    {
        id: 6,
        image: 'https://cms.recordedfuture.com/uploads/credit_card_data_security_a412883ed4.jpg?w=1920',
        title: 'Payment Fraud',
        description: 'Criminals leverage a number of nefarious methods to infiltrate online e-commerce sites and in-store POS systems to steal payment card information. From injecting malicious scripts into Google Tag Manager to creating fake payment forms, the tactics criminals use are constantly evolving. Recorded Future proactively proactively detects attacker infrastructure, compromised points of purchase, and stolen card data to prevent fraud before it occurs.',

    }
];

const [tasks] = useState(initialState);

return (
    <>
        <Head>
            <title >My Website</title>
        </Head>

        <center><h1>Home</h1></center>

        <div className="row">
          {
            tasks.map((todo, index) => {
                return <div className="column" key={index}>
                  <div className="card">
                    <img 
                      src={todo.image}
                      className="responsive"
                    />
                    
                    <b>{todo.title} </b> <br/>
                    <p>{todo.description}</p>
                  </div> <br/>
                </div>
            })
          }
        </div>

        <style jsx>{`
          * {
            box-sizing: border-box;
          }

          body {
            font-family: Arial, Helvetica, sans-serif;
          }

          /* Float four columns side by side */
          .column {
            float: left;
            width: 25%;
            padding: 0 10px;
          }

          /* Remove extra left and right margins, due to padding in columns */
          .row {margin: 0 -5px;}

          /* Clear floats after the columns */
          .row:after {
            content: "";
            display: table;
            clear: both;
          }

          /* Style the counter cards */
          .card {
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); /* this adds the "card" effect */
            padding: 16px;
            min-height: 500px;
            text-align: center;
            background-color: #f1f1f1;
          }

          /* Responsive columns - one column layout (vertical) on small screens */
          @media screen and (max-width: 600px) {
            .column {
              width: 100%;
              display: block;
              margin-bottom: 20px;
            }
          }

          .responsive {
            width: 100%;
            height: auto;
          }
        `}</style>
    </>
  );
}