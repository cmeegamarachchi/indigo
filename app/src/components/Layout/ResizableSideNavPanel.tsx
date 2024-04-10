import React, { ReactNode } from "react";

import { cn } from "@/lib/utils"

import {
	ResizablePanel,
} from "@/components/ui/resizable";


const ResizableSideNavPanel = ({ children }: { children: ReactNode }) => {

	const [isCollapsed, setIsCollapsed] = React.useState(false)


	return (
		<ResizablePanel
			defaultSize={200}
			collapsedSize={4}
			collapsible={true}
			minSize={15}
			maxSize={20}
			onCollapse={() => {
				setIsCollapsed(true)
				document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(true)}`
			}}
			onExpand={() => {
				setIsCollapsed(false)
				document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(false)}`
			}}
			className={cn(
				isCollapsed &&
				"min-w-[50px] transition-all duration-300 ease-in-out"
			)}
		>{children}</ResizablePanel>
	)
}

export default ResizableSideNavPanel