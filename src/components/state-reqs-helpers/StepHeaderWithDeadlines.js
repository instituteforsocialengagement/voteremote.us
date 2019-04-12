import React from 'react';
import ReactTooltip from 'react-tooltip';

const StepHeader = ({ stepName, stepDeadline, stepDeadlineMouseoverText }) => (
    <div className="step_header">
        <ReactTooltip place='bottom' type='info' effect='solid' multiline={true} />
        <div className="step_header_name step_header_left">
            <h2 className="vr_section_subhead vr_black_background">{ stepName }</h2>
        </div>
        <div className="step_header_deadline step_header_right">
            <h3 className="vr_section_subhead vr_blue_background">
                { stepDeadlineMouseoverText 
                    ?
                    <span data-tip={ stepDeadlineMouseoverText } className="deadline_explanation_link">{ stepDeadline }*</span>
                    :
                    stepDeadline
                }
            </h3>
        </div>
    </div>
)

export default StepHeader;