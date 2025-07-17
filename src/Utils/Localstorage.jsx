localStorage.clear()

const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "e@e.com",
    password: "123",
    taskCount: {
      active: 2,
      completed: 1,
      failed: 0,
      newTask: 1
    },
    tasks: [
      {
        taskTitle: "Design Dashboard Wireframes",
        taskDescription: "Create low-fidelity wireframes for the analytics dashboard.",
        taskDate: "2025-07-20",
        category: "design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Implement Login UI",
        taskDescription: "Build responsive login form and validation states.",
        taskDate: "2025-07-22",
        category: "dev",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Fix Header Layout Bug",
        taskDescription: "Resolve flex wrapping issue on mobile header.",
        taskDate: "2025-07-10",
        category: "bugfix",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: 2,
    firstName: "Ishita",
    email: "employee2@example.com",
    password: "123",
    taskCount: {
      active: 2,
      completed: 1,
      failed: 0,
      newTask: 1
    },
    tasks: [
      {
        taskTitle: "API Docs Cleanup",
        taskDescription: "Review and update public REST API documentation.",
        taskDate: "2025-07-18",
        category: "docs",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Mobile Nav Build",
        taskDescription: "Implement slide-in mobile navigation menu.",
        taskDate: "2025-07-25",
        category: "dev",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskTitle: "QA Cycle 1",
        taskDescription: "Run regression tests for release candidate.",
        taskDate: "2025-07-12",
        category: "qa",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: 3,
    firstName: "Vivaan",
    email: "employee3@example.com",
    password: "123",
    taskCount: {
      active: 1,
      completed: 0,
      failed: 1,
      newTask: 1
    },
    tasks: [
      {
        taskTitle: "Icon Set Refresh",
        taskDescription: "Design new monochrome icon set for app navigation.",
        taskDate: "2025-07-19",
        category: "design",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Payment Integration",
        taskDescription: "Integrate Stripe subscription flow.",
        taskDate: "2025-07-28",
        category: "dev",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Unit Test Coverage",
        taskDescription: "Increase backend coverage to 80%.",
        taskDate: "2025-07-08",
        category: "testing",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 4,
    firstName: "Diya",
    email: "employee4@example.com",
    password: "123",
    taskCount: {
      active: 2,
      completed: 1,
      failed: 0,
      newTask: 0
    },
    tasks: [
      {
        taskTitle: "Auth Refactor",
        taskDescription: "Refactor auth middleware for token refresh.",
        taskDate: "2025-07-16",
        category: "dev",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Landing Hero Design",
        taskDescription: "Design hero section with call-to-action.",
        taskDate: "2025-07-21",
        category: "design",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Accessibility Audit",
        taskDescription: "Check WCAG AA compliance across app.",
        taskDate: "2025-07-05",
        category: "qa",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: 5,
    firstName: "Kabir",
    email: "employee5@example.com",
    password: "123",
    taskCount: {
      active: 2,
      completed: 0,
      failed: 1,
      newTask: 1
    },
    tasks: [
      {
        taskTitle: "Marketing Assets",
        taskDescription: "Create social banner set for product launch.",
        taskDate: "2025-07-23",
        category: "marketing",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "DB Migration Prep",
        taskDescription: "Prep scripts for Postgres version upgrade.",
        taskDate: "2025-07-26",
        category: "ops",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Finalize Q2 Report",
        taskDescription: "Compile metrics & narrative for Q2 stakeholder deck.",
        taskDate: "2025-07-09",
        category: "reporting",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  }
];

const admin = [
  {
    id: 101,
    firstName: "Anjali",
    email: "admin@example.com",
    password: "123"
  }
];

export { employees, admin };

export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees));
  localStorage.setItem('admin', JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'));
  const admin = JSON.parse(localStorage.getItem('admin'));
  return { employees, admin };
};
