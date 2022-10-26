import AlertTriangleFilled from '@square/maker-icons/AlertTriangleFilled';
import AlertCircleFilled from '@square/maker-icons/AlertCircleFilled';
import CheckCircleFilled from '@square/maker-icons/CheckCircleFilled';
import InfoFilled from '@square/maker-icons/InfoFilled';
import ChevronUp from '@square/maker-icons/ChevronUp';
import ChevronDown from '@square/maker-icons/ChevronDown';
import ChevronLeft from '@square/maker-icons/ChevronLeft';
import ChevronRight from '@square/maker-icons/ChevronRight';
import X from '@square/maker-icons/X';
import Plus from '@square/maker-icons/Plus';
import ArrowUp from '@square/maker-icons/ArrowUp';

export default function defaultIcons() {
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
}
