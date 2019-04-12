import React from 'react';
import ReactTooltip from 'react-tooltip';

const StepHeader = ({ stepName, stepDeadline, stepDeadlineMouseoverText }) => (
    <div className="step_header">
        <ReactTooltip place='bottom' type='info' effect='solid' multiline={true} />
        <div className="step_header_name step_header_full">
            <h2 className="vr_section_subhead vr_black_background">{ stepName }</h2>
        </div>
    </div>
)

export default StepHeader;