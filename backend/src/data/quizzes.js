const createQuestion = (quizLabel, questionNumber) => {
  const correctIndex = questionNumber % 4;
  const options = [
    `${quizLabel} option A for question ${questionNumber}`,
    `${quizLabel} option B for question ${questionNumber}`,
    `${quizLabel} option C for question ${questionNumber}`,
    `${quizLabel} option D for question ${questionNumber}`
  ];

  return {
    id: `${quizLabel.toLowerCase().replace(/\s+/g, "-")}-q${questionNumber}`,
    question: `${quizLabel}: placeholder question ${questionNumber}. Replace this text with your real NPTEL question later.`,
    options,
    correctAnswer: options[correctIndex]
  };
};

const createQuiz = ({ id, title, category, description }) => ({
  id,
  title,
  category,
  description,
  questionCount: 10,
  questions: Array.from({ length: 10 }, (_, index) =>
    createQuestion(title, index + 1)
  )
});

const week1Questions = [
  {
    id: "week1-q1",
    question: "Which of the following best defines leadership?",
    options: [
      "The ability to manage teams effectively",
      "The ability to influence a group towards achieving a vision or goal",
      "The ability to maintain order and control in an organisation emphasies the literation",
      "The ability to handle conflicts within the team"
    ],
    correctAnswer: "The ability to influence a group towards achieving a vision or goal"
  },
  {
    id: "week1-q2",
    question: "What is the primary difference between leadership and management?",
    options: [
      "Leadership involves overseeing operations, while management involves inspiring teams",
      "Leadership focuses on creating visions and inspiring action, while management focuses on maintaining processes and efficiency",
      "Leadership is about day-to-day task management, while management focuses on long-term strategy",
      "Leadership involves taking risks, while management involves safety and caution"
    ],
    correctAnswer:
      "Leadership focuses on creating visions and inspiring action, while management focuses on maintaining processes and efficiency"
  },
  {
    id: "week1-q3",
    question: "Which leadership style emphasizes leader authority with little input from others?",
    options: ["Participative", "Authoritative", "Delegative", "Coaching"],
    correctAnswer: "Authoritative"
  },
  {
    id: "week1-q4",
    question:
      "Which of Goleman's emotional leadership styles involves creating a vision and motivating people to reach it?",
    options: ["Visionary", "Coaching", "Pacesetting", "Commanding"],
    correctAnswer: "Visionary"
  },
  {
    id: "week1-q5",
    question:
      "According to Lewin's leadership styles, which one involves giving employees the freedom to make decisions with minimal supervision?",
    options: ["Authoritative", "Participative", "Delegative", "Visionary"],
    correctAnswer: "Delegative"
  },
  {
    id: "week1-q6",
    question: "What is a key feature of the 'participative' leadership style?",
    options: [
      "The leader makes all the decisions and tells others what to do",
      "The leader encourages others to participate in decision-making",
      "The leader leads through clear rules and controls",
      "The leader focuses only on efficiency and results"
    ],
    correctAnswer: "The leader encourages others to participate in decision-making"
  },
  {
    id: "week1-q7",
    question:
      "What does the term 'leader-follower-situation interaction' refer to in leadership theory?",
    options: [
      "Leadership is the result of the interaction between leaders, followers, and the context of the situation",
      "Leadership is only influenced by the leader's personal characteristics",
      "The situation alone determines the effectiveness of a leader",
      "Followers dictate leadership styles in an organisations"
    ],
    correctAnswer:
      "Leadership is the result of the interaction between leaders, followers, and the context of the situation"
  },
  {
    id: "week1-q8",
    question:
      "Which leadership style is associated with motivating followers through setting high expectations and being a role model?",
    options: ["Pacesetting", "Visionary", "Democratic", "Coaching"],
    correctAnswer: "Pacesetting"
  },
  {
    id: "week1-q9",
    question:
      "State True or False: In the context of leadership development, human capital refers to the skills, abilities, and knowledge of individuals.",
    options: ["True", "False"],
    correctAnswer: "True"
  },
  {
    id: "week1-q10",
    question:
      "Leadership is considered both a science and an art because it involves __________.",
    options: [
      "Only rational skills and does not involve emotions",
      "Being purely intuitive, not grounded in research",
      "Both scholarly inquiry and practical action, incorporating rational analysis and emotional influence",
      "Focusing entirely on the leader's personal emotional traits"
    ],
    correctAnswer:
      "Both scholarly inquiry and practical action, incorporating rational analysis and emotional influence"
  }
];

const week2Questions = [
  {
    id: "week2-q1",
    question: "What is the main premise of Fiedler's Contingency Model?",
    options: [
      "Leaders should adjust their behaviors according to follower maturity",
      "Leaders should select the right kind of leader for a certain situation or change the situation to fit the leader's style",
      "Leadership effectiveness is solely based on the leader's traits",
      "Leaders should always adopt a participative leadership style"
    ],
    correctAnswer:
      "Leaders should select the right kind of leader for a certain situation or change the situation to fit the leader's style"
  },
  {
    id: "week2-q2",
    question:
      "In Fiedler's Contingency Model, what is the key determinant of leadership effectiveness?",
    options: [
      "The leader's intelligence",
      "The leader's LPC (Least Preferred Co-worker) score and situational favorability",
      "The leader's ability to make decisions independently",
      "The leader's ability to delegate tasks"
    ],
    correctAnswer:
      "The leader's LPC (Least Preferred Co-worker) score and situational favorability"
  },
  {
    id: "week2-q3",
    question:
      "Which of the following is true about leaders with high LPC scores according to Fiedler's model?",
    options: [
      "They are primarily task-oriented",
      "They focus more on relationships and interpersonal ties with subordinates",
      "They are more likely to adopt a telling leadership style",
      "They are usually ineffective in all situations"
    ],
    correctAnswer: "They focus more on relationships and interpersonal ties with subordinates"
  },
  {
    id: "week2-q4",
    question:
      "What are the three situational elements that determine the favorability of a leadership situation in Fiedler's model?",
    options: [
      "Position power, leader-member relations, and task structure",
      "Leader's LPC score, team maturity, and task complexity",
      "Motivation, task completion time, and follower's skills",
      "Leader's personality, employee satisfaction, and work environment"
    ],
    correctAnswer: "Position power, leader-member relations, and task structure"
  },
  {
    id: "week2-q5",
    question: "According to Path-Goal Theory, what is the leader's role in motivating followers?",
    options: [
      "To allow followers to solve problems on their own without guidance",
      "To provide or ensure the availability of valued rewards and help followers find the best way of reaching their goals",
      "To control and supervise all aspects of the followers' tasks",
      "To focus only on task completion without providing emotional support"
    ],
    correctAnswer:
      "To provide or ensure the availability of valued rewards and help followers find the best way of reaching their goals"
  },
  {
    id: "week2-q6",
    question:
      "Which leadership style in Path-Goal Theory focuses on providing clear directions, setting goals, and adhering to rules?",
    options: [
      "Directive leadership",
      "Supportive leadership",
      "Participative leadership",
      "Achievement-oriented leadership"
    ],
    correctAnswer: "Directive leadership"
  },
  {
    id: "week2-q7",
    question:
      "In Path-Goal Theory, which leadership style is used when a leader encourages followers to participate in decision-making and shares work problems?",
    options: [
      "Directive leadership",
      "Supportive leadership",
      "Achievement-oriented leadership",
      "Participative leadership"
    ],
    correctAnswer: "Participative leadership"
  },
  {
    id: "week2-q8",
    question:
      "What is a key factor that influences leadership effectiveness according to the Situational Leadership Model?",
    options: [
      "Task complexity",
      "The leader's popularity in the organisation",
      "The follower's readiness to perform tasks",
      "The leader's ability to delegate"
    ],
    correctAnswer: "The follower's readiness to perform tasks"
  },
  {
    id: "week2-q9",
    question:
      "State True or False: According to the Situational Leadership Model, a key factor that influences leadership effectiveness is the follower's readiness to perform tasks.",
    options: ["True", "False"],
    correctAnswer: "True"
  },
  {
    id: "week2-q10",
    question:
      "The key difference between high and low LPC leaders in Fiedler's model is that __________.",
    options: [
      "High LPC leaders are more focused on tasks, while low LPC leaders focus on relationships",
      "Low LPC leaders are more likely to be relationship-oriented, while high LPC leaders focus on tasks",
      "High LPC leaders are more relationship-oriented, while low LPC leaders focus on tasks",
      "Both high and low LPC leaders have similar behaviors in all situations"
    ],
    correctAnswer:
      "High LPC leaders are more relationship-oriented, while low LPC leaders focus on tasks"
  }
];

const week3Questions = [
  {
    id: "week3-q1",
    question: "Which of the following does the 'Great Man Theory' of leadership suggest?",
    options: [
      "Leadership is the result of acquired skills and knowledge",
      "Leaders are born, not made.",
      "Leadership is a product of organisational structure",
      "Leaders are made through education and experience"
    ],
    correctAnswer: "Leaders are born, not made."
  },
  {
    id: "week3-q2",
    question: "What does 'interpersonal effectiveness' in leadership primarily involve?",
    options: [
      "Understanding and influencing others' behaviours",
      "Managing organisational resources efficiently",
      "Technical expertise in the industry",
      "Developing team collaboration techniques"
    ],
    correctAnswer: "Understanding and influencing others' behaviours"
  },
  {
    id: "week3-q3",
    question: "Which of the following traits is associated with Type A personality?",
    options: [
      "Relaxed and easygoing",
      "Competitive and time-conscious",
      "Calm under stress",
      "Reflective and reserved"
    ],
    correctAnswer: "Competitive and time-conscious"
  },
  {
    id: "week3-q4",
    question:
      "Which leadership theory focuses on the traits and characteristics that predict success in leaders?",
    options: [
      "Situational Leadership Theory",
      "Trait Theory",
      "Path-Goal Theory",
      "Transformational Leadership Theory"
    ],
    correctAnswer: "Trait Theory"
  },
  {
    id: "week3-q5",
    question:
      "True or False: The 'Big Five Personality' model includes openness to experience, conscientiousness, extraversion, agreeableness, and neuroticism.",
    options: ["True", "False"],
    correctAnswer: "True"
  },
  {
    id: "week3-q6",
    question: "Which of the following is a characteristic of Type B personality?",
    options: [
      "Super motivated and competitive",
      "Enjoys achievement but does not stress over losses",
      "Tends to live at higher stress levels",
      "Prefers solitude and avoids social interactions"
    ],
    correctAnswer: "Enjoys achievement but does not stress over losses"
  },
  {
    id: "week3-q7",
    question: "Which of the following is a key principle in Cattell's Trait Theory?",
    options: [
      "People can be classified into two categories: leaders and followers",
      "Personality is determined solely by inherited traits",
      "Surface traits are observable in daily life, while source traits are not",
      "All traits are expressed the same in all situations"
    ],
    correctAnswer: "Surface traits are observable in daily life, while source traits are not"
  },
  {
    id: "week3-q8",
    question: "What does the 'Approach-Avoidance Framework' explain in the context of personality?",
    options: [
      "How people are motivated by positive versus negative stimuli",
      "The balance between introversion and extraversion",
      "How personality traits are formed through social interaction",
      "The classification of people into Type A and Type B personalities"
    ],
    correctAnswer: "How people are motivated by positive versus negative stimuli"
  },
  {
    id: "week3-q9",
    question:
      "Which of the following is a common application of the Myers-Briggs Type Indicator(MBTI)?",
    options: [
      "To predict future leadership success",
      "To identify a person's emotional intelligence level",
      "To assess communication preferences and interpersonal relationships",
      "To analyse a leader's decision-making ability"
    ],
    correctAnswer: "To assess communication preferences and interpersonal relationships"
  },
  {
    id: "week3-q10",
    question:
      "According to John Holland's Theory of Personality Types, the personality type associated with individuals who enjoy helping others and solving social problems is __________.",
    options: ["Realistic", "Investigative", "Artistic", "Social"],
    correctAnswer: "Social"
  }
];

const week4Questions = [
  {
    id: "week4-q1",
    question: "What is the primary difference between Power and Leadership?",
    options: [
      "Power is about inspiring others, while leadership is about exercising control",
      "Power is the ability to cause change, whereas leadership is about influencing people to follow",
      "Power is about following instructions, while leadership is about making decisions",
      "Power is based on trust, while leadership is based on formal authority"
    ],
    correctAnswer:
      "Power is the ability to cause change, whereas leadership is about influencing people to follow"
  },
  {
    id: "week4-q2",
    question:
      "According to the French and Raven's Power Taxonomy, which type of power is based on a leader's formal position within an organisation?",
    options: ["Referent Power", "Expert Power", "Coercive Power", "Legitimate Power"],
    correctAnswer: "Legitimate Power"
  },
  {
    id: "week4-q3",
    question: "What does Coercive Power depend on?",
    options: [
      "Ability to offer rewards or incentives",
      "Ability to use punishment or threats",
      "Ability to inspire and build loyalty",
      "Authority granted by the organisations"
    ],
    correctAnswer: "Ability to use punishment or threats"
  },
  {
    id: "week4-q4",
    question: "Which of the following is a characteristic of leaders with Referent Power?",
    options: [
      "Their influence is based on formal authority",
      "Their influence comes from their expertise and knowledge",
      "Their influence is due to their personal relationships and admiration from followers",
      "Their power is rooted in fear of punishment"
    ],
    correctAnswer:
      "Their influence is due to their personal relationships and admiration from followers"
  },
  {
    id: "week4-q5",
    question:
      "State True or False: Leaders with Expert Power influence others based on their authority or role within an organisation.",
    options: ["True", "False"],
    correctAnswer: "False"
  },
  {
    id: "week4-q6",
    question:
      "Which of the following is a key component of the Ability Model of Emotional Intelligence (EI)?",
    options: ["Empathy", "Self-regulation", "Perceiving Emotions", "Social Skills"],
    correctAnswer: "Perceiving Emotions"
  },
  {
    id: "week4-q7",
    question:
      "In Goleman's Mixed Model of Emotional Intelligence, which of the following is considered a part of Personal Competence?",
    options: ["Motivation", "Empathy", "Social Skills", "Social Responsibility"],
    correctAnswer: "Motivation"
  },
  {
    id: "week4-q8",
    question:
      "According to the Cognitive Resource Theory, what is a primary factor that affects a leader's reaction to stress?",
    options: [
      "The leader's experience",
      "The leader's cognitive intelligence",
      "The amount of stress in the environment",
      "Social Responsibility"
    ],
    correctAnswer: "The leader's cognitive intelligence"
  },
  {
    id: "week4-q9",
    question: "What does Theory X assume about employees?",
    options: [
      "They are self-motivated and enjoy responsibility",
      "They dislike work and need supervision",
      "They prefer to be consulted and included in decision-making",
      "They can manage their own tasks without direction"
    ],
    correctAnswer: "They dislike work and need supervision"
  },
  {
    id: "week4-q10",
    question: "According to Theory Y, the assumption about employees is that they __________.",
    options: [
      "Need to be controlled and directed",
      "Are motivated by external rewards and fear",
      "Enjoy work, take responsibility, and can be self-directive",
      "Are more effective when strictly supervised"
    ],
    correctAnswer: "Enjoy work, take responsibility, and can be self-directive"
  }
];

const week5Questions = [
  {
    id: "week5-q1",
    question: "Which of the following is a core component of authentic leadership?",
    options: [
      "Balanced processing",
      "Internalized moral perspective",
      "Relational transparency",
      "All of the above"
    ],
    correctAnswer: "All of the above"
  },
  {
    id: "week5-q2",
    question:
      "In the Leadership Pipeline model, passage 1 involves transitioning from managing self to managing others.",
    options: ["True", "False"],
    correctAnswer: "True"
  },
  {
    id: "week5-q3",
    question: "What is the primary benefit of 360-degree feedback?",
    options: [
      "It is a tool to evaluate leadership skills from multiple perspectives",
      "It is only used for performance appraisals",
      "It is effective in measuring technical skills",
      "None of the above"
    ],
    correctAnswer: "It is a tool to evaluate leadership skills from multiple perspectives"
  },
  {
    id: "week5-q4",
    question:
      "According to the leadership continuum, which leadership style is characterized by high focus on people and low on tasks?",
    options: ["Autocratic", "Democratic", "Employee-centered", "Laissez-faire"],
    correctAnswer: "Employee-centered"
  },
  {
    id: "week5-q5",
    question:
      "Which ethical dilemma involves deciding between protecting someone's confidentiality and serving the greater good?",
    options: [
      "Truth versus loyalty",
      "Individual versus community",
      "Short-term versus long-term",
      "Justice versus mercy"
    ],
    correctAnswer: "Individual versus community"
  },
  {
    id: "week5-q6",
    question: "What is the key difference between terminal and instrumental values?",
    options: [
      "Terminal values refer to end states, while instrumental values refer to modes of behavior",
      "Terminal values are actions, instrumental values are goals",
      "Terminal values are related to short-term goals",
      "Instrumental values are related to spiritual growth"
    ],
    correctAnswer:
      "Terminal values refer to end states, while instrumental values refer to modes of behavior"
  },
  {
    id: "week5-q7",
    question:
      "Which of the following is a leadership behavior associated with the Leadership Behaviors Model?",
    options: ["Values Champion", "Competent Performer", "People Motivator", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    id: "week5-q8",
    question:
      "Which leadership theory suggests that effective leaders adapt their style based on the situation?",
    options: [
      "Path-Goal Theory",
      "Situational Leadership Theory",
      "Ohio State Studies",
      "Trait Theory"
    ],
    correctAnswer: "Situational Leadership Theory"
  },
  {
    id: "week5-q9",
    question:
      "__________ is the leadership style in which a leader focuses on maintaining production efficiency but pays little attention to people?",
    options: ["Country Club", "Impoverished Management", "Team Management", "Authority-compliance"],
    correctAnswer: "Authority-compliance"
  },
  {
    id: "week5-q10",
    question:
      "In the context of ethical leadership, which characteristic refers to the practice of leading by example?",
    options: ["Justice", "Respect", "Leadership by example", "Integrity"],
    correctAnswer: "Leadership by example"
  }
];

const week6Questions = [
  {
    id: "week6-q1",
    question: "What is the primary characteristic of destructive leadership?",
    options: [
      "Charismatic and effective",
      "Morally and ethically challenged",
      "Highly transformational",
      "Ethical and supportive"
    ],
    correctAnswer: "Morally and ethically challenged"
  },
  {
    id: "week6-q2",
    question: "According to the Toxic Triangle, which of the following is a key component?",
    options: ["Charisma", "Strong organizational fit", "Supportive followers", "None of the above"],
    correctAnswer: "Charisma"
  },
  {
    id: "week6-q3",
    question:
      "Which of the following is considered a situational factor contributing to a managerial decline?",
    options: [
      "Leadership skills",
      "High emotional intelligence",
      "Strong interpersonal skills",
      "Lack of organizational fit"
    ],
    correctAnswer: "Lack of organizational fit"
  },
  {
    id: "week6-q4",
    question:
      "What is one of the dark-side personality traits that can lead to managerial incompetence?",
    options: ["Leadership presence", "Self-awareness", "Narcissism", "Problem-solving skills"],
    correctAnswer: "Narcissism"
  },
  {
    id: "week6-q5",
    question: "What is the first stage in the Three-Stage Crisis Management Plan?",
    options: ["Pre-crisis planning", "Crisis resolution", "Adapting after a crisis", "Leading during a crisis"],
    correctAnswer: "Pre-crisis planning"
  },
  {
    id: "week6-q6",
    question:
      "Accommodation negotiation style involves pursuing one's own goals at the expense of the other party?",
    options: ["True", "False"],
    correctAnswer: "False"
  },
  {
    id: "week6-q7",
    question:
      "In the negotiation process, __________ is the first step in preparing for a negotiation?",
    options: [
      "Setting objectives",
      "Developing options",
      "Researching the other party",
      "Anticipating objections"
    ],
    correctAnswer: "Researching the other party"
  },
  {
    id: "week6-q8",
    question: "What is a key competency for crisis leaders?",
    options: [
      "High technical expertise",
      "Ability to manage large teams",
      "Ability to delegate tasks effectively",
      "Emotional intelligence"
    ],
    correctAnswer: "Emotional intelligence"
  },
  {
    id: "week6-q9",
    question:
      "During a crisis, which of the following is a crucial aspect for effective leadership?",
    options: [
      "Focusing on minor details",
      "Managing by directives",
      "Maintaining communication and trust",
      "Prioritizing financial outcomes"
    ],
    correctAnswer: "Maintaining communication and trust"
  },
  {
    id: "week6-q10",
    question: "What is the main objective of a crisis management plan?",
    options: [
      "To minimize the crisis response team size",
      "To ensure the company survives with minimal damage",
      "To enhance leadership influence",
      "To avoid any form of external communication"
    ],
    correctAnswer: "To ensure the company survives with minimal damage"
  }
];

const week7Questions = [
  {
    id: "week7-q1",
    question: "Which of the following is a characteristic of organizational culture?",
    options: ["Stability", "Flexibility", "Innovation", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    id: "week7-q2",
    question: "According to Schein, which of the following is NOT a key factor of organizational culture?",
    options: ["Myths and stories", "Rituals", "Technology", "Symbols and artifacts"],
    correctAnswer: "Technology"
  },
  {
    id: "week7-q3",
    question: "What is the main focus of the 'Glocal' mindset in global leadership?",
    options: [
      "Focusing only on local needs",
      "Understanding global integration and local responsiveness",
      "Focusing on financial profitability",
      "Ignoring cultural differences"
    ],
    correctAnswer: "Understanding global integration and local responsiveness"
  },
  {
    id: "week7-q4",
    question:
      "Which leadership style is most appropriate for handling ambiguity and complexity in global leadership?",
    options: [
      "Autocratic leadership",
      "Transactional leadership",
      "Leadership agility",
      "Transformational leadership"
    ],
    correctAnswer: "Leadership agility"
  },
  {
    id: "week7-q5",
    question: "____________ is one key trait that effective global leaders should possess?",
    options: ["Self-protective leadership", "Cultural intelligence", "Narcissism", "Rigidity"],
    correctAnswer: "Cultural intelligence"
  },
  {
    id: "week7-q6",
    question: "In Maslow's Hierarchy of Needs, Safety needs are fulfilled first.",
    options: ["True", "False"],
    correctAnswer: "False"
  },
  {
    id: "week7-q7",
    question: "What does 'empowerment' mean in the context of motivation?",
    options: [
      "Giving followers control over their actions and decisions",
      "Delegating tasks without accountability",
      "Rewarding high performers only",
      "Giving a leader more authority"
    ],
    correctAnswer: "Giving followers control over their actions and decisions"
  },
  {
    id: "week7-q8",
    question:
      "Which motivational theory focuses on the relationship between goals and performance?",
    options: [
      "Maslow's hierarchy of needs",
      "Goal-setting theory",
      "Herzberg's two-factor theory",
      "Equity theory"
    ],
    correctAnswer: "Goal-setting theory"
  },
  {
    id: "week7-q9",
    question: "What is the primary difference between a group and a team?",
    options: [
      "Teams have more members",
      "Teams have leaders, but groups do not",
      "Groups work on individual goals, while teams focus on collective goals",
      "Groups have more formal structures"
    ],
    correctAnswer: "Groups work on individual goals, while teams focus on collective goals"
  },
  {
    id: "week7-q10",
    question:
      "Which type of follower is characterized by being passive, uncritical, and dependent on others?",
    options: ["Alienated followers", "Yes people", "Survivor", "Sheep"],
    correctAnswer: "Sheep"
  }
];

const week8Questions = [
  {
    id: "week8-q1",
    question:
      "Which of the following is NOT one of the eight main principles of group dynamics?",
    options: [
      "The more attractive the group is to its members, the greater the influence",
      "Efforts to change individuals who deviate from group norms will encounter strong resistance",
      "The greater the prestige of a group member, the less influence they can exert",
      "Information about the change must be shared by all relevant people"
    ],
    correctAnswer: "The greater the prestige of a group member, the less influence they can exert"
  },
  {
    id: "week8-q2",
    question: "What is the primary focus during the 'Storming' stage of group development?",
    options: [
      "Group structure solidifies",
      "Members resist the constraints imposed on individuality",
      "Task performance begins",
      "The group dissolves"
    ],
    correctAnswer: "Members resist the constraints imposed on individuality"
  },
  {
    id: "week8-q3",
    question:
      "In the 'Norming' stage of group development, what is primarily being established?",
    options: [
      "Group identity and cohesion",
      "Task performance",
      "Conflict over leadership",
      "Task assignments"
    ],
    correctAnswer: "Group identity and cohesion"
  },
  {
    id: "week8-q4",
    question:
      "To achieve a higher level of self-esteem is a key reason why people form groups, according to Social Identity Theory.",
    options: ["True", "False"],
    correctAnswer: "True"
  },
  {
    id: "week8-q5",
    question: "Propinquity theory explains that people affiliate with others due to:",
    options: ["Similar values", "Common interests", "Personal goals", "Geographical proximity"],
    correctAnswer: "Geographical proximity"
  },
  {
    id: "week8-q6",
    question: "Which of the following is the primary advantage of teamwork?",
    options: [
      "Increased individual responsibility",
      "Increased stress",
      "Improved quality through collaboration",
      "Increased competition among team members"
    ],
    correctAnswer: "Improved quality through collaboration"
  },
  {
    id: "week8-q7",
    question: "____________ is a key factor for creating effective teams?",
    options: [
      "Avoiding conflict",
      "Maintaining a clear mission",
      "Limiting communication",
      "Ignoring individual roles"
    ],
    correctAnswer: "Maintaining a clear mission"
  },
  {
    id: "week8-q8",
    question: "The 'Balance Theory' of group dynamics is concerned with:",
    options: [
      "The psychological needs of team members",
      "The physical distance between group members",
      "The financial resources of the group",
      "The alignment of attitudes toward common goals"
    ],
    correctAnswer: "The alignment of attitudes toward common goals"
  },
  {
    id: "week8-q9",
    question: "In group dynamics, what does 'role conflict' refer to?",
    options: [
      "A situation where members have too many roles",
      "A conflict of personality among team members",
      "Divergent expectations of how an individual should behave",
      "Overlapping responsibilities"
    ],
    correctAnswer: "Divergent expectations of how an individual should behave"
  },
  {
    id: "week8-q10",
    question:
      "Which of the following is an example of a process that strengthens team cohesiveness?",
    options: [
      "Encouraging open communication",
      "Assigning individual tasks",
      "Limiting collaboration",
      "Encouraging groupthink"
    ],
    correctAnswer: "Encouraging open communication"
  }
];

const week9Questions = [
  {
    id: "week9-q1",
    question: "Unified commitment in teams primarily relates to:",
    options: [
      "Group size",
      "Shared values and sense of unity",
      "Formal leadership training",
      "Compensation structure"
    ],
    correctAnswer: "Shared values and sense of unity"
  },
  {
    id: "week9-q2",
    question: "Which is NOT a component of team effectiveness?",
    options: [
      "Task performance",
      "External market trends",
      "Group process",
      "Individual satisfaction"
    ],
    correctAnswer: "External market trends"
  },
  {
    id: "week9-q3",
    question: "Principled leadership influences teams through what process?",
    options: [
      "Cognitive and motivational",
      "Economic and financial",
      "Hierarchical and bureaucratic",
      "Centralized and linear"
    ],
    correctAnswer: "Cognitive and motivational"
  },
  {
    id: "week9-q4",
    question: "'Game of Possibilities' is mainly designed to:",
    options: [
      "Build technical skill",
      "Restrict idea generation",
      "Encourage creativity and teamwork",
      "Punishment and rewards"
    ],
    correctAnswer: "Encourage creativity and teamwork"
  },
  {
    id: "week9-q5",
    question: "Effective team coaching, according to Hackman and Wageman, focuses on.",
    options: [
      "Only at start of project",
      "Motivation, strategy, and education",
      "Punishment and rewards",
      "Avoiding feedback"
    ],
    correctAnswer: "Motivation, strategy, and education"
  },
  {
    id: "week9-q6",
    question: "Bounded rationality in decision-making suggests individuals:",
    options: [
      "Always make the optimal decision",
      "Accept the first satisfactory option",
      "Never have constraints",
      "Seek infinite alternatives"
    ],
    correctAnswer: "Accept the first satisfactory option"
  },
  {
    id: "week9-q7",
    question: "Which method generates alternatives anonymously and remotely?",
    options: ["Brainstorming", "Nominal Group Technique", "Delphi Technique", "Focus Group"],
    correctAnswer: "Delphi Technique"
  },
  {
    id: "week9-q8",
    question: "The Diversity Tree' activity aims to",
    options: [
      "Encourage homogeneity",
      "Value diversity and promote mutual respect",
      "Minimize communication",
      "Reduce creative thinking"
    ],
    correctAnswer: "Value diversity and promote mutual respect"
  },
  {
    id: "week9-q9",
    question:
      "Team norms are acceptable behavior standards that all members are expected to follow.",
    options: ["True", "False"],
    correctAnswer: "True"
  },
  {
    id: "week9-q10",
    question:
      "__________ bias describes focusing too much on recent events when making decisions.",
    options: ["Anchoring", "Confirmation", "Availability", "Representation"],
    correctAnswer: "Availability"
  }
];

const week10Questions = [
  {
    id: "week10-q1",
    question: "At which MCOD stage does an organization actively welcome diverse candidate?",
    options: [
      "The Club",
      "The Compliance Organization",
      "The Affirming Organization",
      "The Exclusionary Organization"
    ],
    correctAnswer: "The Affirming Organization"
  },
  {
    id: "week10-q2",
    question: "Role clarification in teams increases",
    options: [
      "Role ambiguity",
      "Efficiency and mutual understanding",
      "Competition among members",
      "Disconnection in communication"
    ],
    correctAnswer: "Efficiency and mutual understanding"
  },
  {
    id: "week10-q3",
    question: "Which law emphasizes the importance of a shared goal over personal roles ?",
    options: [
      "Law of the Bad Apple",
      "Law of the Big Picture",
      "Law of Communication",
      "Law of Chain"
    ],
    correctAnswer: "Law of the Big Picture"
  },
  {
    id: "week10-q4",
    question: "The Kolb cycle includes which stage?",
    options: [
      "Abstract conceptualization",
      "Programmed repetition",
      "Isolated experimentation",
      "Passive watching"
    ],
    correctAnswer: "Abstract conceptualization"
  },
  {
    id: "week10-q5",
    question: "Kolb's 'Converging' learning style is associated with:",
    options: [
      "Watching only",
      "technical problem solving and active experimentation",
      "Avoidance of new experiences",
      "Ignoring group feedback"
    ],
    correctAnswer: "technical problem solving and active experimentation"
  },
  {
    id: "week10-q6",
    question: "A key role in action learning teams is the:",
    options: [
      "Passive observer",
      "Action learning coach guiding reflection and feedback",
      "Group analyst",
      "Isolated implementer"
    ],
    correctAnswer: "Action learning coach guiding reflection and feedback"
  },
  {
    id: "week10-q7",
    question: "The action learning cycle is inspired by",
    options: [
      "Plan-Do-Check-Act",
      "Memorization cycle",
      "Fixed feedback process",
      "Non-collaborative routines"
    ],
    correctAnswer: "Plan-Do-Check-Act"
  },
  {
    id: "week10-q8",
    question: "The GAPS model stands for:",
    options: [
      "Guidance, Action, Performance, Strengths",
      "Goals, Abilities, Perceptions, Standards",
      "Growth, Autonomy, Planning, Success",
      "General Aspirations, Professional Strategy"
    ],
    correctAnswer: "Goals, Abilities, Perceptions, Standards"
  },
  {
    id: "week10-q9",
    question: "Multicultural organizations integrate diversity at every level.",
    options: ["True", "False"],
    correctAnswer: "True"
  },
  {
    id: "week10-q10",
    question:
      "The affirmative stage in MCOD represents a commitment to __________ discriminatory practices.",
    options: ["Promoting", "Ignoring Standardizing", "Eliminating", "Standardizing"],
    correctAnswer: "Eliminating"
  }
];

const week11Questions = [
  {
    id: "week11-q1",
    question: "Reverse mentoring is characterized by:",
    options: [
      "Junior employees mentoring seniors",
      "Senior employees mentoring juniors",
      "Only peer-to-peer exchanges",
      "Mentoring external consultants"
    ],
    correctAnswer: "Junior employees mentoring seniors"
  },
  {
    id: "week11-q2",
    question: "Group mentoring involves",
    options: [
      "Only single mentor-single mentee pairs",
      "Multiple mentors and collective mentees",
      "No interaction within group",
      "Training through lectures"
    ],
    correctAnswer: "Multiple mentors and collective mentees"
  },
  {
    id: "week11-q3",
    question: "Promotion of gender equity in the workplace involves",
    options: [
      "Pay secrecy",
      "Regular pay audits and fairness",
      "Restricting parental leave",
      "Zero hiring reviews"
    ],
    correctAnswer: "Regular pay audits and fairness"
  },
  {
    id: "week11-q4",
    question: "The Companies Act, 2013, in India requires boards to",
    options: [
      "Include at least one woman on company boards",
      "Ensure no female representation",
      "Abolish board diversit",
      "Repeat executive roles annually"
    ],
    correctAnswer: "Include at least one woman on company boards"
  },
  {
    id: "week11-q5",
    question: "Negative affectivity is correlated with",
    options: [
      "Greater satisfaction",
      "Higher job dissatisfaction",
      "Improved team dynamics",
      "Positive behavioural outcomes"
    ],
    correctAnswer: "Higher job dissatisfaction"
  },
  {
    id: "week11-q6",
    question: "Speed mentoring is structured as",
    options: [
      "Single deep dive with one expert",
      "Group-only dialogue",
      "No feedback allowed",
      "Brief conversations with several mentors"
    ],
    correctAnswer: "Brief conversations with several mentors"
  },
  {
    id: "week11-q7",
    question: "Boundary management in relationships primarily means",
    options: [
      "Finding balance in personal and professional interaction",
      "Excessive time allocation for one colleague",
      "Promoting gossip",
      "Avoiding group activities"
    ],
    correctAnswer: "Finding balance in personal and professional interaction"
  },
  {
    id: "week11-q8",
    question: "Maslow's hierarchy of needs for followers includes",
    options: [
      "Ignoring achievement",
      "Disregarding empowerment",
      "Autocratic supervision",
      "Satisfaction of individual goals and growth"
    ],
    correctAnswer: "Satisfaction of individual goals and growth"
  },
  {
    id: "week11-q9",
    question: "Workplace boundaries help balance relationships and productivity",
    options: ["True", "False"],
    correctAnswer: "True"
  },
  {
    id: "week11-q10",
    question: "Smooth __________ is a hallmark of conjunctive communication.",
    options: ["Isolation", "Suppression", "Disjointedness", "Connection"],
    correctAnswer: "Connection"
  }
];

const week12Questions = [
  {
    id: "week12-q1",
    question: "What happened with Coca-Cola's New Coke?",
    options: [
      "It was a sales disaster",
      "It became more popular than Pepsi",
      "It increased Coke's market share",
      "It was introduced in 2020"
    ],
    correctAnswer: "It was a sales disaster"
  },
  {
    id: "week12-q2",
    question: "Which factor is external in the T7 Model?",
    options: ["Team leader fit", "Talent", "Trust", "Task skills"],
    correctAnswer: "Team leader fit"
  },
  {
    id: "week12-q3",
    question: "What is a major challenge of diverse teams?",
    options: [
      "Less shared knowledge initially",
      "More conflict always",
      "No need for inclusion",
      "Homogeneous views"
    ],
    correctAnswer: "Less shared knowledge initially"
  },
  {
    id: "week12-q4",
    question:
      "Which is NOT one of the three development requirements for leadership development?",
    options: [
      "A supportive leader prioritizing development",
      "An ambitious, committed candidate",
      "A standard development process",
      "High salary"
    ],
    correctAnswer: "High salary"
  },
  {
    id: "week12-q5",
    question: "What is one of the five key skills to develop others, according to Forbes?",
    options: ["Communication", "Ignorance", "Avoidance", "Isolation"],
    correctAnswer: "Communication"
  },
  {
    id: "week12-q6",
    question: "Which component is NOT part of credibility?",
    options: ["Competence", "Caring", "Character", "Wealth"],
    correctAnswer: "Wealth"
  },
  {
    id: "week12-q7",
    question: "\"Mission\" in the Rocket Model refers to",
    options: [
      "Shared purpose aligned with the team's tasks",
      "Only the leader's objectives",
      "Short-term assignments",
      "Unstated goals"
    ],
    correctAnswer: "Shared purpose aligned with the team's tasks"
  },
  {
    id: "week12-q8",
    question: "Which is NOT a characteristic of the Six Cs for guiding behaviour?",
    options: ["Carelessness", "Clarity", "Coaching", "Consequences"],
    correctAnswer: "Carelessness"
  },
  {
    id: "week12-q9",
    question: "Giving feedback immediately after an event is generally more effective than waiting.",
    options: ["False", "True"],
    correctAnswer: "True"
  },
  {
    id: "week12-q10",
    question: "In the Rocket Model, __________ refers to commitment to team objectives.",
    options: ["Context", "Buy-in", "Talent", "Mission"],
    correctAnswer: "Buy-in"
  }
];

const finalPracticeQuestions = [
  ...week1Questions,
  ...week2Questions,
  ...week3Questions,
  ...week4Questions,
  ...week5Questions,
  ...week6Questions,
  ...week7Questions,
  ...week8Questions,
  ...week9Questions,
  ...week10Questions,
  ...week11Questions,
  ...week12Questions
].map((question, index) => ({
  ...question,
  id: `finalpractice-q${index + 1}`,
  sourceQuestionId: question.id,
  sourceWeek: `Week ${Math.ceil((index + 1) / 10)}`
}));

const mock1Questions = [
  {
    id: "mock1-q1",
    question: 'According to the lecture, what is the primary definition of "Leadership"?',
    options: [
      "The ability to administer and maintain the status quo.",
      "The ability to influence a group towards the achievement of a vision or set of goals.",
      "The process of controlling resources efficiently.",
      "The act of following established procedures and regulations."
    ],
    correctAnswer:
      "The ability to influence a group towards the achievement of a vision or set of goals."
  },
  {
    id: "mock1-q2",
    question:
      'The lecture describes "Leadership as Art" as crucial for engaging hearts and building vibrant organizational cultures. Which of the following best represents this aspect?',
    options: [
      "Converting data into wisdom for decision-making.",
      "Inspiring and motivating individuals through emotional appeals and creativity.",
      "Systematically analyzing information for strategic planning.",
      "Focusing on logic and rationality in decision-making."
    ],
    correctAnswer: "Inspiring and motivating individuals through emotional appeals and creativity."
  },
  {
    id: "mock1-q3",
    question: 'Which of the following is identified as a "Leadership Myth" in the lecture?',
    options: [
      "Leadership is a learned process.",
      "Leaders are of only one type.",
      "Leadership is for oneself.",
      "Leadership is shared."
    ],
    correctAnswer: "Leaders are of only one type."
  },
  {
    id: "mock1-q4",
    question: 'According to the lecture, what is the significance of "Distributed Leadership"?',
    options: [
      "It restricts leadership to the top echelons of an organization.",
      "It ensures that only charismatic individuals become leaders.",
      "It is crucial for achieving corporate vision and fostering collective contribution at all levels.",
      "It implies that leadership is a rare skill found only in a few."
    ],
    correctAnswer:
      "It is crucial for achieving corporate vision and fostering collective contribution at all levels."
  },
  {
    id: "mock1-q5",
    question:
      'The "Leadership/Followership Mobius Strip" metaphor, as presented in the Interactional Framework, most profoundly highlights which aspect of leadership?',
    options: [
      "The fixed and distinct hierarchical structure between leaders and followers.",
      "The single, continuous, and indistinguishable surface representing the fluid and interdependent nature of leadership and followership roles.",
      "The linear progression of individuals from a follower role to a leadership role over time.",
      "The clear separation of responsibilities between those who lead and those who follow within an organization."
    ],
    correctAnswer:
      "The single, continuous, and indistinguishable surface representing the fluid and interdependent nature of leadership and followership roles."
  },
  {
    id: "mock1-q6",
    question: 'What is the primary focus of "Leader Development" as defined in the lecture?',
    options: [
      "Promoting networked relationships and collaborative behavior.",
      "Facilitating individual growth in perspective, knowledge, skills, and abilities.",
      "Building the collective capacity for leadership throughout the organization.",
      "Establishing clear operating rhythms for team meetings."
    ],
    correctAnswer:
      "Facilitating individual growth in perspective, knowledge, skills, and abilities."
  },
  {
    id: "mock1-q7",
    question:
      "Which of the following is identified as the \"most desirable strategy\" to overcome multicultural team challenges, fostering creativity and self-awareness?",
    options: ["Managerial Intervention", "Exit Option", "Cultural Intervention", "Adaptation"],
    correctAnswer: "Adaptation"
  },
  {
    id: "mock1-q8",
    question:
      'According to Lencioni\'s "5 Behaviors of Cohesive Teams," which behavior forms the base of the pyramid, allowing members to expose weaknesses without fear?',
    options: ["Commitment", "Accountability", "Trust", "Conflict"],
    correctAnswer: "Trust"
  },
  {
    id: "mock1-q9",
    question:
      'In Kolb\'s Experiential Learning Cycle, which stage involves "reviewing or reflecting on the experience"?',
    options: [
      "Concrete Experience",
      "Reflective Observation",
      "Abstract Conceptualization",
      "Active Experimentation"
    ],
    correctAnswer: "Reflective Observation"
  },
  {
    id: "mock1-q10",
    question:
      'What is a crucial characteristic of the "Problem" in Action Learning, as emphasized in the lecture?',
    options: [
      "It must be a hypothetical scenario.",
      "It should be a symptom, not the root cause.",
      "It must be a real-world challenge requiring deep analysis to identify the actual issue.",
      "It should be easily solvable by a single individual."
    ],
    correctAnswer:
      "It must be a real-world challenge requiring deep analysis to identify the actual issue."
  },
  {
    id: "mock1-q11",
    question: "In the GAPS analysis framework, what does the 'P' stand for?",
    options: ["Potential", "Performance", "Perceptions", "Planning"],
    correctAnswer: "Perceptions"
  },
  {
    id: "mock1-q12",
    question:
      'What is a key distinction between "Coaching" and "Mentoring" according to the lecture?',
    options: [
      "Coaching is long-term, while mentoring is short-term.",
      "Coaching focuses on career growth, while mentoring focuses on performance.",
      "Coaching is present-focused and goal-oriented, while mentoring is more holistic and long-term.",
      "Coaching is informal, while mentoring is formal."
    ],
    correctAnswer:
      "Coaching is present-focused and goal-oriented, while mentoring is more holistic and long-term."
  },
  {
    id: "mock1-q13",
    question:
      "The lecture states that women leaders are often noted for exhibiting a specific leadership style more frequently than men, fostering strong team bonds and coaching. Which style is this?",
    options: [
      "Transactional Leadership",
      "Laissez-Faire Leadership",
      "Transformational Leadership",
      "Autocratic Leadership"
    ],
    correctAnswer: "Transformational Leadership"
  },
  {
    id: "mock1-q14",
    question:
      "According to Graicunas' Theory on Span of Management, as the number of subordinates increases, the number of potential relationships grows:",
    options: ["Linearly", "Logarithmically", "Exponentially", "Statically"],
    correctAnswer: "Exponentially"
  },
  {
    id: "mock1-q15",
    question:
      `In Herzberg's Two-Factor Theory, which of the following is considered a "motivator" that drives satisfaction, rather than merely preventing dissatisfaction?`,
    options: ["Salary", "Working Conditions", "Achievement", "Company Policy"],
    correctAnswer: "Achievement"
  },
  {
    id: "mock1-q16",
    question:
      "Which principle of Supportive Communication states that verbal and nonverbal communication should match exactly what is thought and felt?",
    options: [
      "Descriptive, Not Evaluative",
      "Problem-Oriented, Not Person-Oriented",
      "Congruence, Not Incongruence",
      "Validates, Rather Than Invalidates Individuals"
    ],
    correctAnswer: "Congruence, Not Incongruence"
  },
  {
    id: "mock1-q17",
    question: "Which of the following is NOT listed as one of the six elements of constructive feedback?",
    options: ["Helpful", "Direct", "Judgmental", "Timely"],
    correctAnswer: "Judgmental"
  },
  {
    id: "mock1-q18",
    question:
      'Which type of thinking is described as "generating a diverse assortment of appropriate responses to an open-ended question or task where the solution is not predetermined"?',
    options: [
      "Convergent Thinking",
      "Critical Thinking",
      "Divergent Thinking",
      "Analytical Thinking"
    ],
    correctAnswer: "Divergent Thinking"
  },
  {
    id: "mock1-q19",
    question:
      "According to the Rocket Model, which question addresses the team's capacity to openly discuss difficult issues and find solutions?",
    options: [
      "What are our critical assumptions?",
      "Do we have the talent we need?",
      "How do we work through disagreements?",
      "Are we achieving our goals?"
    ],
    correctAnswer: "How do we work through disagreements?"
  },
  {
    id: "mock1-q20",
    question:
      "In the Trust Equation, what is the denominator that, when maximized, leads to lower trustworthiness?",
    options: ["Credibility", "Reliability", "Intimacy", "Self-Orientation"],
    correctAnswer: "Self-Orientation"
  },
  {
    id: "mock1-q21",
    question:
      'According to the lecture, which of the following is a "personal condition conducive to growth" for individuals?',
    options: [
      "When there is no felt need for development.",
      "When discouraged by a respected individual.",
      "When there is a felt need for development.",
      "When moving from higher to lower self-esteem."
    ],
    correctAnswer: "When there is a felt need for development."
  },
  {
    id: "mock1-q22",
    question:
      'In the Action-Observation-Reflection (AOR) model, why is "Reflection" considered the most crucial, yet often neglected, step?',
    options: [
      "It is the initial step where a leader makes a decision.",
      "It involves critically observing the outcomes of an action.",
      "It transforms observations into insights that inform future actions, leading to continuous growth.",
      "It is primarily about gathering data on the consequences of the action."
    ],
    correctAnswer:
      "It transforms observations into insights that inform future actions, leading to continuous growth."
  },
  {
    id: "mock1-q23",
    question:
      'In the "Leadership Making Cycle" of LMX Theory, which phase is characterized by "high-quality LMX, cemented and dependable relationships, and almost unlimited mutual influence"?',
    options: [
      "Stranger Phase",
      "Acquaintance Phase",
      "Role-taking Phase",
      "Mature Partnership Phase"
    ],
    correctAnswer: "Mature Partnership Phase"
  },
  {
    id: "mock1-q24",
    question:
      "In the Vroom-Yetton Normative Decision Model, which decision style involves the leader sharing the problem with followers in a group meeting, collecting their ideas, and then making the decision alone?",
    options: [
      "Autocratic (A1)",
      "Autocratic (A2)",
      "Consultative (C2)",
      "Group (G2)"
    ],
    correctAnswer: "Consultative (C2)"
  },
  {
    id: "mock1-q25",
    question:
      "According to the Hersey-Blanchard Situational Leadership Model, which leadership style is characterized by \"High task behavior, low relationship behavior\" and is best for R1 (Unable & Unwilling/Insecure) followers?",
    options: ["Selling (S2)", "Telling (S1)", "Participating (S3)", "Delegating (S4)"],
    correctAnswer: "Telling (S1)"
  },
  {
    id: "mock1-q26",
    question:
      `Fiedler's Contingency Model suggests that a "Task-Oriented (Low LPC)" leader is most effective in which two types of situations?`,
    options: [
      "Moderately favorable and moderately unfavorable situations.",
      "Only highly favorable situations.",
      "Both very favorable and very unfavorable situations.",
      "Only very unfavorable situations."
    ],
    correctAnswer: "Both very favorable and very unfavorable situations."
  },
  {
    id: "mock1-q27",
    question:
      "The lecture distinguishes between Charismatic and Transformational Leadership primarily based on what factor?",
    options: [
      "The leader's ability to inspire excitement and emotional attachment.",
      "Whether the leader's vision primarily serves their own needs or a higher collective purpose for followers and society.",
      "The leader's reliance on traditional authority systems.",
      "The leader's focus on maintaining the status quo through transactional exchanges."
    ],
    correctAnswer:
      "Whether the leader's vision primarily serves their own needs or a higher collective purpose for followers and society."
  },
  {
    id: "mock1-q28",
    question:
      'Which of the following is NOT identified as a critical shift in organizations for "Leadership for Tomorrow"?',
    options: [
      "Faster Decision Making",
      "De-bureaucratization",
      "Centralization of Power",
      "Decentralization of Authority"
    ],
    correctAnswer: "Centralization of Power"
  },
  {
    id: "mock1-q29",
    question: 'According to the lecture, what does "Core Self-evaluation (CSE)" encompass?',
    options: [
      "Only self-esteem.",
      "Self-esteem, locus of control, self-efficacy, and emotional stability.",
      "Only an individual's physical attributes.",
      "External perceptions of an individual's competence."
    ],
    correctAnswer:
      "Self-esteem, locus of control, self-efficacy, and emotional stability."
  },
  {
    id: "mock1-q30",
    question:
      'In the Big Five (OCEAN) Model, which trait is described as the "tendency and intensity to seek interaction with the environment, particularly socially"?',
    options: [
      "Conscientiousness",
      "Agreeableness",
      "Extraversion",
      "Openness to Experience"
    ],
    correctAnswer: "Extraversion"
  }
];

const weeklyQuizzes = Array.from({ length: 12 }, (_, index) =>
  createQuiz({
    id: `week${index + 1}`,
    title: `Week ${index + 1} Quiz`,
    category: "week",
    description: `Practice placeholder questions for Week ${index + 1}.`
  })
);

const weeklyQuizzesWithCustomData = weeklyQuizzes.map((quiz) =>
  quiz.id === "week1"
    ? {
        ...quiz,
        description: "Week 1 leadership quiz with your provided MCQs.",
        questions: week1Questions,
        questionCount: week1Questions.length
      }
    : quiz.id === "week2"
      ? {
          ...quiz,
          description: "Week 2 contingency and path-goal leadership quiz with your provided MCQs.",
          questions: week2Questions,
          questionCount: week2Questions.length
        }
      : quiz.id === "week3"
        ? {
            ...quiz,
            description: "Week 3 leadership trait and personality quiz with your provided MCQs.",
            questions: week3Questions,
            questionCount: week3Questions.length
          }
        : quiz.id === "week4"
          ? {
              ...quiz,
              description: "Week 4 power, emotional intelligence, and Theory X/Y quiz with your provided MCQs.",
              questions: week4Questions,
              questionCount: week4Questions.length
            }
          : quiz.id === "week5"
            ? {
                ...quiz,
                description: "Week 5 authentic leadership, ethics, and leadership styles quiz with your provided MCQs.",
                questions: week5Questions,
                questionCount: week5Questions.length
              }
            : quiz.id === "week6"
              ? {
                  ...quiz,
                  description: "Week 6 destructive leadership, negotiation, and crisis management quiz with your provided MCQs.",
                  questions: week6Questions,
                  questionCount: week6Questions.length
                }
              : quiz.id === "week7"
                ? {
                    ...quiz,
                    description: "Week 7 organizational culture, global leadership, and motivation quiz with your provided MCQs.",
                    questions: week7Questions,
                    questionCount: week7Questions.length
                  }
                : quiz.id === "week8"
                  ? {
                      ...quiz,
                      description: "Week 8 group dynamics and teamwork quiz with your provided MCQs.",
                      questions: week8Questions,
                      questionCount: week8Questions.length
                    }
                  : quiz.id === "week9"
                    ? {
                        ...quiz,
                        description: "Week 9 team effectiveness, diversity, and decision-making quiz with your provided MCQs.",
                        questions: week9Questions,
                        questionCount: week9Questions.length
                      }
                    : quiz.id === "week10"
                      ? {
                          ...quiz,
                          description: "Week 10 MCOD, learning styles, and action learning quiz with your provided MCQs.",
                          questions: week10Questions,
                          questionCount: week10Questions.length
                        }
                      : quiz.id === "week11"
                        ? {
                            ...quiz,
                            description: "Week 11 mentoring, workplace equity, and communication quiz with your provided MCQs.",
                            questions: week11Questions,
                            questionCount: week11Questions.length
                          }
                        : quiz.id === "week12"
                          ? {
                              ...quiz,
                              description: "Week 12 team models, credibility, and feedback quiz with your provided MCQs.",
                              questions: week12Questions,
                              questionCount: week12Questions.length
                            }
    : quiz
);

const mockQuizzes = Array.from({ length: 5 }, (_, index) =>
  createQuiz({
    id: `mock${index + 1}`,
    title: `Mock ${index + 1}`,
    category: "mock",
    description: `Full-length placeholder practice for Mock ${index + 1}.`
  })
);

const mockQuizzesWithCustomData = mockQuizzes.map((quiz) =>
  quiz.id === "mock1"
    ? {
        ...quiz,
        title: "Mock Quiz 1 Leadership and Team Effectiveness",
        description: "Mock Exam 1 | Course ID: noc26_mg61",
        questions: mock1Questions,
        questionCount: mock1Questions.length
      }
    : quiz
);

const finalPracticeQuiz = {
  id: "finalpractice",
  title: "Final Practice Quiz",
  category: "final",
  description:
    "Combined practice set from Week 1 to Week 12 with randomized question and option order on every load.",
  questionCount: finalPracticeQuestions.length,
  questions: finalPracticeQuestions
};

export const quizzes = [
  ...weeklyQuizzesWithCustomData,
  finalPracticeQuiz,
  ...mockQuizzesWithCustomData
];
