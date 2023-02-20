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
		error: (h) => h(AlertCircleFilled),
		warning: (h) => h(AlertTriangleFilled),
		success: (h) => h(CheckCircleFilled),
		info: (h) => h(InfoFilled),
		chevronUp: (h) => h(ChevronUp),
		chevronDown: (h) => h(ChevronDown),
		chevronLeft: (h) => h(ChevronLeft),
		chevronRight: (h) => h(ChevronRight),
		close: (h) => h(X),
		plus: (h) => h(Plus),
		minus: (h) => h(Minus),
		arrowUp: (h) => h(ArrowUp),
		check: (h) => h(Check),
	};
};
