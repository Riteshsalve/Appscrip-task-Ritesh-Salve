import React, { useState } from 'react';
import styles from '@/app/styles/accordion.module.css';

const accordionData = [
    {
        title: 'IDEAL FOR',
        content: 'All',
        checkboxes: ['Man', 'Woman', 'Baby & Kids'],
    },
    {
        title: 'OCCASION',
        content: 'All',
        checkboxes: ['Man', 'Woman', 'Baby & Kids'],
    },
    {
        title: 'FABRIC',
        content: 'All',
        checkboxes: ['Man', 'Woman', 'Baby & Kids'],
    },
    {
        title: 'WORK',
        content: 'All',
        checkboxes: ['Man', 'Woman', 'Baby & Kids'],
    },
    {
        title: 'SEGMENT',
        content: 'All',
        checkboxes: ['Man', 'Woman', 'Baby & Kids'],
    },
    {
        title: 'SUITABLE FOR',
        content: 'All',
        checkboxes: ['Man', 'Woman', 'Baby & Kids'],
    },
];

const Accordion = () => {
    const [openSectionIndex, setOpenSectionIndex] = useState(null);

    const toggleSection = (index) => {
        setOpenSectionIndex(openSectionIndex === index ? null : index);
    };

    return (
        <div>
            {accordionData.map((section, index) => (
                <div key={index} className={styles.accordionBox}>
                    <button
                        className={styles.sectionButton}
                        onClick={() => toggleSection(index)}
                        style={{ backgroundColor: 'white', padding: '0px 3px', }}
                    >
                        {section.title}
                        <span
                            className={`${styles.chevron} ${openSectionIndex === index ? styles.rotate : ''
                                }`}
                        >
                            ▼
                        </span>
                    </button>
                    <p className={styles.subHeading}>{section.content}</p>
                    <div
                        className={styles.content}
                        style={{
                            maxHeight: openSectionIndex === index ? '1000px' : '0',
                        }}
                    >

                        <form>
                            {section.checkboxes.map((item, idx) => (
                                <div key={idx} style={{ margin: '9px 0px' }}>
                                    <input type="checkbox" id={`${index}-${idx}`} name={item} />
                                    <label htmlFor={`${index}-${idx}`}>{item}</label>
                                </div>
                            ))}
                        </form>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Accordion;
