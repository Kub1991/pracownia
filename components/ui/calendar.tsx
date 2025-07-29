"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker } from "react-day-picker"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-4", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-base font-unbounded font-bold text-clr-dark",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          "h-8 w-8 bg-transparent p-0 hover:bg-clr-accent/20 rounded-lg transition-colors",
          "border border-gray-200 hover:border-clr-accent"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-clr-dark/70 rounded-md w-9 font-medium text-sm text-center py-2",
        row: "flex w-full mt-2",
        cell: "h-9 w-9 text-center text-sm p-0 relative focus-within:relative focus-within:z-20",
        day: cn(
          "h-9 w-9 p-0 font-medium text-clr-dark hover:bg-clr-accent/30 hover:text-clr-dark rounded-lg transition-all duration-200",
          "focus:bg-clr-accent focus:text-clr-dark focus:outline-none focus:ring-2 focus:ring-clr-accent/50"
        ),
        day_range_end: "day-range-end",
        day_selected: "bg-clr-accent text-clr-dark hover:bg-clr-accent hover:text-clr-dark font-bold shadow-sm",
        day_today: "bg-gray-100 text-clr-dark font-bold border border-gray-300",
        day_outside: "text-clr-dark/30 opacity-50 hover:bg-gray-50 hover:text-clr-dark/50",
        day_disabled: "text-clr-dark/20 opacity-30 cursor-not-allowed hover:bg-transparent",
        day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        Icon: ({ name, ...props }) => {
          if (name === 'chevron_left') {
            return <ChevronLeft className="h-4 w-4 text-clr-dark" />;
          }
          if (name === 'chevron_right') {
            return <ChevronRight className="h-4 w-4 text-clr-dark" />;
          }
          return null;
        },
      }}
      {...props}
    />
  )
}
Calendar.displayName = "Calendar"

export { Calendar }