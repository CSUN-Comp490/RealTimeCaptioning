import { Injectable } from '@angular/core';

@Injectable()
export class StudentInfoService {

  classes = [];
  constructor() { }

  getClasses() {

  return  this.classes = [
      {
        'courseName': 'Comp 490',
        'courseID': '12345',
        'professor': 'Fitzgerald',
        'day': 'MW',
        'time': '11:00am - 12:15pm'
      },
      {
        'courseName': 'Comp 482',
        'courseID': '67891',
        'professor': 'Noga',
        'day': 'MW',
        'time': '1:00pm - 2:15pm'
      },
      {
        'courseName': 'Bio 107/L',
        'courseID': '45673',
        'professor': 'Smith',
        'day': 'TuTh',
        'time': '11:00am - 12:15pm'
      },
      {
        'courseName': 'Art 305',
        'courseID': '32134',
        'professor': 'Picasso',
        'day': 'F',
        'time': '11:00am - 12:15pm'
      }
    ];


  }

  getTranscripts() {

  }

}
