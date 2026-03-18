"use client";

import React from "react";
import styles from "./IFlowListingBody.module.css";
import { Plus } from "lucide-react";

const IFlowListingBody = () => {
    return (
        <div className={styles.inlineCtaParent}>
            <div className={styles.inlineCta}>
                <div className={styles.imageWrap}>
                    <div className={styles.image}></div>
                </div>
                <div className={styles.content}>
                    <div className={styles.content2}>
                        <div className={styles.textAndSupportingText}>
                            <div className={styles.text}>Learn more about iFlows</div>
                            <div className={styles.supportingText}>
                                {`Text about learning the latest and greatest methodologies when creating iFlows and ability to get support from Kaya experts.`}
                            </div>
                        </div>
                        <div className={styles.actions}>
                            <div className={styles.buttonsbutton}>
                                <div className={styles.textPadding}>
                                    <div className={styles.text2}>Dismiss</div>
                                </div>
                            </div>
                            <div className={styles.buttonsbutton2}>
                                <div className={styles.textPadding}>
                                    <div className={styles.text2}>Learn more</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.headerSectionParent}>
                <div className={styles.headerSection}>
                    <div className={styles.container}>
                        <div className={styles.imageWrap2}>
                            <div className={styles.image2}></div>
                        </div>
                        <div className={styles.content3}>
                            <div className={styles.breadcrumbs}></div>
                            <div className={styles.container2}>
                                <div className={styles.pageHeader}>
                                    <div className={styles.content4}>
                                        <div className={styles.textAndSupportingText2}>
                                            <div className={styles.text4}>iFlows</div>
                                            <div className={styles.supportingText2}>
                                                {`Placeholder text about; iFlows live here`}
                                            </div>
                                        </div>
                                        <div className={styles.actions2}>
                                            <div className={styles.buttonsbutton3}>
                                                <Plus className={styles.plusIcon} />
                                                <div className={styles.textPadding}>
                                                    <div className={styles.text2}>Create iFlow</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.actions3}>
                                <div className={styles.buttonsbutton4}></div>
                                <div className={styles.buttonsbutton5}></div>
                                <div className={styles.buttonsbutton5}></div>
                                <div className={styles.buttonsbutton7}></div>
                            </div>
                            <div className={styles.select}></div>
                        </div>
                        <img className={styles.dividerIcon} alt="" />
                    </div>
                </div>
                
                <div className={styles.pageHeaderParent}>
                    <div className={styles.pageHeader2}>
                        <div className={styles.content5}>
                            <div className={styles.textAndSupportingText3}>
                                <div className={styles.text6}>Recent</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.experienceWrapper}>
                        <div className={styles.experience}>
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className={styles.integrationCardDesktop}>
                                    <div className={styles.content6}>
                                        <div className={styles.headingAndToggle}>
                                            <div className={i === 1 ? styles.badge : styles.badge2}>
                                                <div className={styles.text7}>{i === 1 ? 'Published' : 'Draft'}</div>
                                            </div>
                                            <div className={styles.headingAndIcon}>
                                                <div className={styles.iconWrap}>
                                                    <div className={styles.linear}></div>
                                                </div>
                                                <div className={styles.heading}>Invoice Processing </div>
                                            </div>
                                            <div className={styles.supportingText3}>
                                                This workflow handles invoice processing tasks.
                                            </div>
                                            <div className={styles.headingAndToggleInner}>
                                                <div className={styles.parent}>
                                                    <b className={styles.b}>9</b>
                                                    <div className={styles.agents}>Agents</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.supportingText4}>Last modified: Mar 17, 2026, 15:44</div>
                                    </div>
                                    <div className={styles.sectionFooter}>
                                        <img className={styles.dividerIcon2} alt="" />
                                        <div className={styles.content7}>
                                            <div className={styles.actions4}>
                                                <div className={styles.button}>
                                                    <div className={styles.text2}>View iFlow</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className={styles.pageHeaderParent}>
                    <div className={styles.pageHeader2}>
                        <div className={styles.content5}>
                            <div className={styles.textAndSupportingText3}>
                                <div className={styles.text6}>Favorites</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.experience2}>
                        {[1, 2].map((i) => (
                            <div key={i} className={styles.integrationCardDesktop5}>
                                <div className={styles.content6}>
                                    <div className={styles.headingAndToggle}>
                                        <div className={i === 1 ? styles.badge : styles.badge2}>
                                            <div className={styles.text7}>{i === 1 ? 'Published' : 'Draft'}</div>
                                        </div>
                                        <div className={styles.headingAndIcon}>
                                            <div className={styles.iconWrap}>
                                                <div className={styles.linear}></div>
                                            </div>
                                            <div className={styles.heading}>Invoice Processing </div>
                                        </div>
                                        <div className={styles.supportingText3}>
                                            This workflow handles invoice processing tasks.
                                        </div>
                                        <div className={styles.headingAndToggleInner}>
                                            <div className={styles.parent}>
                                                <b className={styles.b}>9</b>
                                                <div className={styles.agents}>Agents</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.supportingText4}>Last modified: Mar 17, 2026, 15:44</div>
                                </div>
                                <div className={styles.sectionFooter}>
                                    <img className={styles.dividerIcon2} alt="" />
                                    <div className={styles.content7}>
                                        <div className={styles.actions4}>
                                            <div className={styles.button}>
                                                <div className={styles.text2}>View iFlow</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.pageHeaderParent}>
                    <div className={styles.pageHeader2}>
                        <div className={styles.content5}>
                            <div className={styles.textAndSupportingText3}>
                                <div className={styles.text6}>All iFlows</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.experience2}>
                        {[1, 2].map((i) => (
                            <div key={i} className={styles.integrationCardDesktop5}>
                                <div className={styles.content6}>
                                    <div className={styles.headingAndToggle}>
                                        <div className={i === 1 ? styles.badge : styles.badge2}>
                                            <div className={styles.text7}>{i === 1 ? 'Published' : 'Draft'}</div>
                                        </div>
                                        <div className={styles.headingAndIcon}>
                                            <div className={styles.iconWrap}>
                                                <div className={styles.linear}></div>
                                            </div>
                                            <div className={styles.heading}>Invoice Processing </div>
                                        </div>
                                        <div className={styles.supportingText3}>
                                            This workflow handles invoice processing tasks.
                                        </div>
                                        <div className={styles.headingAndToggleInner}>
                                            <div className={styles.parent}>
                                                <b className={styles.b}>9</b>
                                                <div className={styles.agents}>Agents</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.supportingText4}>Last modified: Mar 17, 2026, 15:44</div>
                                </div>
                                <div className={styles.sectionFooter}>
                                    <img className={styles.dividerIcon2} alt="" />
                                    <div className={styles.content7}>
                                        <div className={styles.actions4}>
                                            <div className={styles.button}>
                                                <div className={styles.text2}>View iFlow</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IFlowListingBody;
