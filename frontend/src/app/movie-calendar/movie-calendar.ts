import { Component } from '@angular/core';
import { CalendarEvent, CalendarService } from '../services/calendar';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-movie-calendar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './movie-calendar.html',
  styleUrl: './movie-calendar.css'
})
export class MovieCalendar {

  events: CalendarEvent[] = []
 
  newEvent: Partial<CalendarEvent> = {}
  daysInMonth: string[] = [];
  currentDate = new Date();
  currentMonth = this.currentDate.getMonth();
  currentYear = this.currentDate.getFullYear();
  selectedDate: Date | null = null;

  constructor(private calendarService: CalendarService){}

  calendarDays: { date: Date; inCurrentMonth: boolean }[] = [];
weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  ngOnInit()
  {
    this.loadEvents();
    this.generateCalendar(); 

  }
  

 
 generateCalendar() {
  const firstDay = new Date(this.currentYear, this.currentMonth, 1);
  const lastDay = new Date(this.currentYear, this.currentMonth + 1, 0);
  const startDay = firstDay.getDay();

  const days = [];

  // Previous month days
  for (let i = startDay - 1; i >= 0; i--) {
    const d = new Date(this.currentYear, this.currentMonth, -i);
    days.push({ date: d, inCurrentMonth: false });
  }

  // Current month days
  for (let i = 1; i <= lastDay.getDate(); i++) {
    days.push({ date: new Date(this.currentYear, this.currentMonth, i), inCurrentMonth: true });
  }

  // Fill to complete the week rows (up to 42 days total)
  while (days.length % 7 !== 0) {
    const nextDate: Date = new Date(this.currentYear, this.currentMonth, lastDay.getDate() + (days.length % 7));
    days.push({ date: nextDate, inCurrentMonth: false });
  }

  this.calendarDays = days;
}

prevMonth() {
  if (this.currentMonth === 0) {
    this.currentMonth = 11;
    this.currentYear--;
  } else {
    this.currentMonth--;
  }
  this.generateCalendar();
}

nextMonth() {
  if (this.currentMonth === 11) {
    this.currentMonth = 0;
    this.currentYear++;
  } else {
    this.currentMonth++;
  }
  this.generateCalendar();
}

get currentMonthName() {
  return new Date(this.currentYear, this.currentMonth).toLocaleString('default', { month: 'long' });
}

isToday(date: Date): boolean {
  const today = new Date();
  return date.toDateString() === today.toDateString();
}

openModal(date: Date) {
  this.selectedDate = date;
  this.newEvent = {
    movieTitle: '',
    watchDate: date.toISOString().split('T')[0],
    description: ''
  };
}

closeModal() {
  this.selectedDate = null;
}



loadEvents() {
  this.calendarService.getEvents().subscribe(data => {
    this.events = data;
  });
}

getEventsForDate(date: Date): CalendarEvent[] {
  const dateStr = date.toISOString().split('T')[0];
  return this.events.filter(e => e.watchDate === dateStr);
}

addEvent() {
  console.log('Add event clicked');

  if (
    this.newEvent.movieTitle &&
    this.newEvent.watchDate
  ) {
    const event: CalendarEvent = {
      movieTitle: this.newEvent.movieTitle,
      watchDate: this.newEvent.watchDate,
      description: this.newEvent.description || ''
    };
    this.calendarService.addEvent(event).subscribe(() => {
      this.closeModal();
      this.loadEvents();   
      this.generateCalendar();  
    });
  }
}

deleteEvent(id: number) {
  this.calendarService.deleteEvent(id).subscribe(() => {
    this.loadEvents();
  });
}
}