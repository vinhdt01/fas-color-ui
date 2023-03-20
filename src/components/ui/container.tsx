import cn from "classnames";
interface Props {
	className?: string;
	children?: any;
	el?: HTMLElement;
	clean?: boolean;
}

const Container: React.FC<Props> = ({
	children,
	className,
	el = "div",
	clean,
}) => {
	const rootClassName = cn(className, {
		"mx-auto max-w-[1200px] px-4 md:px-4 2xl:px-0": !clean,
	});

	let Component: React.ComponentType<
		React.HTMLAttributes<HTMLDivElement>
	> = el as any;

	return <Component className={rootClassName}>{children}</Component>;
};

export default Container;
