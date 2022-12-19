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
const Minus = require('@square/maker-icons/Minus').default;
const ArrowUp = require('@square/maker-icons/ArrowUp').default;
const Check = require('@square/maker-icons/Check').default;

module.exports = function defaultIcons() {
	return {
		error: AlertCircleFilled,
		warning: AlertTriangleFilled,
		success: CheckCircleFilled,
		info: InfoFilled,
		chevronUp: ChevronUp,
		chevronDown: ChevronDown,
		chevronLeft: ChevronLeft,
		chevronRight: ChevronRight,
		close: X,
		plus: Plus,
		minus: Minus,
		arrowUp: ArrowUp,
		check: Check,
	};
};
