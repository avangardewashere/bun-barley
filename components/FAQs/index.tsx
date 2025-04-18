"use client";
import clsx from "clsx";
import React from "react";
import styles from "./index.module.scss";
import { Collapse } from "antd-mobile";
import { FaRegCheckSquare } from "react-icons/fa";

const FAQs = () => {
  const faqData = [
    {
      key: "1",
      title: "What makes barley grass special?",
      content:
        "Dr. Yoshihide Hagiwara, a scientist and a Japanese Pharmacologist, studied more than 200 plants and after 13 years of this study, he found out that barley grass is the only vegetation on earth that can supply nutrition from birth to old age. Barley grass has vitamins, minerals, 20 amino acids, chlorophyll and 300+ enzymes.",
    },
    {
      key: "2",
      title: "What is Salveo Barley?",
      content:
        "Salveo Barley is not a medicine, it is a wholefood from nature.",
    },
    {
      key: "3",
      title:
        "If Salveo is not a medicine, howcome some users say it cured their illness?",
      content:
        "Salveo Barley helps in boosting immune system and our body’s self-healing ability. This ability when powered, can treat or cured illnesses much faster than usual. Salveo Barley treats people’s illnesses indirectly.",
    },
    {
      key: "4",
      title: "Is Salveo good for kids?",
      content:
        "Yes. Since Salveo Barley is 100% Pure and Organic, it is very safe for kids and for all ages. In addition, barley grass from Salveo is beneficial for kids from 6-month old also.",
    },
    {
      key: "5",
      title: "Who should take Salveo Barley Grass?",
      content:
        "Salveo Barley is for all kinds or race of people, kids or adults, ill or not, rich or poor. It has no side effects, no overdosage, no additives and no preservatives, it is really a pure barley grass powder.",
    },
    {
      key: "6",
      title: "How to take Salveo Barley Grass?",
      content:
        "For prevention, babies or kids may take up to 2 scoops or 4 capsules of Salveo Barley in a glass of milk or water once to three times a day. Adults may take 2 to 4 scoops per glass of water once to three times a day." +
        "<br /> <br />" +
        "For healing and recovery from inspection or chronic disease, it is recommended for kids and adults to increase their consumption from 4 to 10 scoops of barley powder in a glass of water at least three times per day." +
        "<br /> <br />" +
        "In addition, since Salveo Barley has no side effects and no overdosage, users, kids or adults may take more than the recommended consumption of barley grass powder stated above.",
    },
    {
      key: "7",
      title: "How does Salveo juice taste like?",
      content:
        "Salveo barley is like a tea or matcha, it doesn’t have a bitter or after taste. It also taste like a natural organic and pure green tea.",
    },
  ];

  const osData = [
    {
      key: "1",
      title: "Where and how do I order?",
      content:
        "You can purchase here in our website then explore products by going to the Products page and add the product to your shopping cart. You can review your shopping cart and proceed to click check out. To complete your purchase, simply enter your shipping, billing and payment details, then submit the order. " +
        "<br /> <br />" +
        "For more options and preference of order, you may visit our store in Shopee and Lazada.",
    },
    {
      key: "2",
      title: "How do I get the confirmation of my order?",
      content:
        "The order will be confirmed when we send the confirmation text or email to the contact detail you provided. The text or email will contain a confirmation and summary of the order in relation to the product such as product description and the total price of the order and any shipping costs.",
    },
    {
      key: "3",
      title:
        "Shipping and Delivery",
      content:
        "Shipping out of orders may take 1 to 2 business days after order confirmation. " +
        "<br /> <br />" +
        "Delivery of the item(s) may take up to 3 to 5 business days for Luzon areas and 6 to 10 business days for Visayas and Mindanao. " +
        "<br /> <br />" +
        "Furthermore, we have no control over the courier and we acknowledge that couriers may encounter delays in shipment. " +
        "<br /> <br />" +
        "Note: " +
        "<br /> <br />" +
        "Salveo Barley PH will not be liable for any lost or delayed shipping once the parcel has been transferred to the courier. " +
        "<br /> <br />" +
        "For any lost, delayed, or damaged items incurred in shipping, please contact the respective courier for real-time updates.",
    },
  ];
  return (
    <div className={clsx(styles.container)}>
      <h1 style={{ fontSize: "52px" }}>Frequently Ask Questions</h1>
      <h3>About the product</h3>
      <Collapse accordion defaultActiveKey="1">
        {faqData.map(({ key, title, content }) => (
          <Collapse.Panel
            key={key}
            title={
              <div className="flex gap-2 items-center">
                <FaRegCheckSquare /> {title}
              </div>
            }
          >
            <p dangerouslySetInnerHTML={{ __html: content }} />
          </Collapse.Panel>
        ))}
      </Collapse>
      <h3>Orders and Shipment</h3>
      <Collapse accordion defaultActiveKey="1">
        {osData.map(({ key, title, content }) => (
          <Collapse.Panel key={key} title={
            <div className="flex gap-2 items-center">
              <FaRegCheckSquare /> {title}
            </div>
          }>
            <p dangerouslySetInnerHTML={{ __html: content }} />
          </Collapse.Panel>
        ))}
      </Collapse>
    </div>
  );
};

export default FAQs;
