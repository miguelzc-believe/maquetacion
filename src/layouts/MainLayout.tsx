import { ReactNode } from "react";
import { User, Menu } from "lucide-react";
import { Button } from "../components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet";
import { MainSidebar } from "../components/navigation/MainSidebar";
import { Breadcrumbs } from "../components/navigation/Breadcrumbs";
import { Toaster } from "../components/ui/sonner";

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <div className="min-h-screen bg-background flex flex-col">
        {/* Header */}
        <header className="bg-primary border-b border-medical-border sticky top-0 z-50">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-4">
              {/* Mobile Menu */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="md:hidden text-primary-foreground"
                  >
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px] p-0">
                  <MainSidebar />
                </SheetContent>
              </Sheet>

              {/* Logo / Title */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary-foreground/10 rounded-lg flex items-center justify-center">
                  <User className="h-5 w-5 text-primary-foreground" />
                </div>
                <h1 className="text-primary-foreground font-semibold text-lg hidden sm:block">
                  Sistema Médico
                </h1>
              </div>

              {/* Breadcrumbs */}
              <div className="hidden lg:block ml-4">
                <Breadcrumbs />
              </div>
            </div>

            {/* User Info */}
            <div className="flex items-center gap-2">
              <span className="text-primary-foreground text-sm hidden sm:block">
                ADMIN - Hospital María Esperanza
              </span>
              <div className="flex items-center gap-2 bg-primary-foreground/10 px-3 py-1.5 rounded-lg">
                <User className="h-4 w-4 text-primary-foreground" />
                <span className="text-primary-foreground font-medium text-sm">
                  Dr. Jhon Doe
                </span>
              </div>
            </div>
          </div>

          {/* Mobile Breadcrumbs */}
          <div className="lg:hidden px-4 pb-3">
            <Breadcrumbs />
          </div>
        </header>

        {/* Main Content */}
        <div className="flex flex-1">
          {/* Desktop Sidebar */}
          <div className="hidden md:block">
            <MainSidebar />
          </div>

          {/* Content Area */}
          <main className="flex-1 overflow-auto bg-background">{children}</main>
        </div>
      </div>
      <Toaster />
    </>
  );
}
