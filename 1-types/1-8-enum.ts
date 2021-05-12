{
  /**
   * Enum 
   */

  // JavaScript에는 존재하지 않음
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({
    "MONDAY": 0,
    "TUESDAY": 1,
    "WEDNESDAY": 2,
  })
  const dayOfToday = DAYS_ENUM.MONDAY;

  // TypeScript
  enum Days {
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
    // 문자를 할당하려면 전체 다 할당해야 함.
  }
  console.log(Days.Friday);
  const day = Days.Saturday
  console.log(day);
    
}