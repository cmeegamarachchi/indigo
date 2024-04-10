import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup,
} from "@/components/ui/resizable";

import { TooltipProvider} from "@/components/ui/tooltip"
import {Container, ResizableSideNavPanel} from "@/components";

function Home() {

	return (
		<Container>
			<TooltipProvider delayDuration={0}>
				<ResizablePanelGroup
					direction="horizontal"
					onLayout={(sizes: number[]) => {
						document.cookie = `react-resizable-panels:layout=${JSON.stringify(
							sizes
						)}`
					}}
					className="min-h-screen items-stretch"
				>
					<ResizableSideNavPanel>One</ResizableSideNavPanel>
					<ResizableHandle withHandle />
					<ResizablePanel>Two</ResizablePanel>
				</ResizablePanelGroup>
			</TooltipProvider>
		</Container>
	)
}

export default Home