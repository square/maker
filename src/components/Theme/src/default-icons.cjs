const AlertTriangleFilled = require('@square/maker-icons/AlertTriangleFilled').default;
const AlertCircleFilled = require('@square/maker-icons/AlertCircleFilled').default;
const CheckCircleFilled = require('@square/maker-icons/CheckCircleFilled').default;
const InfoFilled = require('@square/maker-icons/InfoFilled').default;
const ChevronUp = require('@square/maker-icons/ChevronUp').default;
const ChevronDown = require('@square/maker-icons/ChevronDown').default;
const ChevronLeft = require('@square/maker-icons/ChevronLeft').default;
const ChevronRight = require('@square/maker-icons/ChevronRight').default;
const X = require('@square/maker-icons/X').default;
const Plus = require('@square/maker-icons/Plus').default;
const ArrowUp = require('@square/maker-icons/ArrowUp').default;

module.exports = function defaultIcons() {
	return {
		critical: AlertCircleFilled,
		warning: AlertTriangleFilled,
		success: CheckCircleFilled,
		info: InfoFilled,
		chevronUp: ChevronUp,
		chevronDown: ChevronDown,
		chevronLeft: ChevronLeft,
		chevronRight: ChevronRight,
		close: X,
		plus: Plus,
		arrowUp: ArrowUp,
	};
};
