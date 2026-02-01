import React from 'react';
import { Calculator, Beaker, Globe, BookOpen, PenTool, Languages, Computer } from 'lucide-react';

const Services = () => {
  const subjects = [
    {
      icon: Calculator,
      title: 'Mathematics',
      description: 'Arithmetic, Algebra, Geometry, Statistics',
      levels: 'Class 4-12',
      color: 'blue'
    },
    {
      icon: Beaker,
      title: 'Science',
      description: 'Physics, Chemistry, Biology, General Science',
      levels: 'Class 4-10',
      color: 'green'
    },
    {
      icon: Globe,
      title: 'Social Studies',
      description: 'History, Geography, Civics',
      levels: 'Class 4-10',
      color: 'purple'
    },
    {
      icon: Languages,
      title: 'Languages',
      description: 'English, Hindi, Kannada',
      levels: 'Class 4-10',
      color: 'orange'
    },
    {
      icon: Computer,
      title: 'Computer Science',
      description: 'Basics, Coding, IT Skills',
      levels: 'Class 4-12',
      color: 'indigo'
    },
    {
      icon: BookOpen,
      title: 'Commerce',
      description: 'Accountancy, Economics, Business Studies',
      levels: 'Class 11-12, CA Foundation',
      color: 'red'
    }
  ];

  const colorVariants = {
    blue: { bg: 'bg-blue-50', hoverBg: 'hover:bg-blue-100', iconBg: 'bg-blue-600', textColor: 'text-blue-600' },
    green: { bg: 'bg-green-50', hoverBg: 'hover:bg-green-100', iconBg: 'bg-green-600', textColor: 'text-green-600' },
    purple: { bg: 'bg-purple-50', hoverBg: 'hover:bg-purple-100', iconBg: 'bg-purple-600', textColor: 'text-purple-600' },
    orange: { bg: 'bg-orange-50', hoverBg: 'hover:bg-orange-100', iconBg: 'bg-orange-600', textColor: 'text-orange-600' },
    indigo: { bg: 'bg-indigo-50', hoverBg: 'hover:bg-indigo-100', iconBg: 'bg-indigo-600', textColor: 'text-indigo-600' },
    red: { bg: 'bg-red-50', hoverBg: 'hover:bg-red-100', iconBg: 'bg-red-600', textColor: 'text-red-600' }
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* SECTION INTRO (SEO FOUNDATION) */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Academic Subjects We Teach
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Edukripa provides structured academic tuitions for school students
            across core subjects. Our teaching approach focuses on concept clarity,
            exam preparation, and consistent academic improvement.
          </p>
        </div>

        {/* CORE SUBJECT SEO SECTIONS */}
        <div className="max-w-4xl mx-auto text-center mb-14 space-y-6">

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              Mathematics Tuition for School Students
            </h2>
            <p className="text-gray-600">
              Concept-based mathematics tuition focusing on problem-solving skills,
              formulas, practice worksheets, and exam-oriented preparation.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              Science Tuition for School Students
            </h2>
            <p className="text-gray-600">
              Physics, Chemistry, and Biology tuition with practical explanations
              and strong conceptual foundations for better academic performance.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              Exam Preparation & Academic Support
            </h2>
            <p className="text-gray-600">
              Regular assessments, revision sessions, and personalized guidance
              to help students perform confidently in school examinations.
            </p>
          </div>

        </div>

        {/* SUBJECT CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {subjects.map((subject, index) => {
            const colors = colorVariants[subject.color];
            const Icon = subject.icon;

            return (
              <article
                key={index}
                className={`${colors.bg} ${colors.hoverBg} p-8 rounded-xl transition-all duration-200 hover:shadow-lg transform hover:-translate-y-1`}
              >
                <div className={`${colors.iconBg} w-16 h-16 rounded-xl flex items-center justify-center mb-6`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {subject.title} Tuition
                </h3>

                <p className="text-gray-700 mb-4 leading-relaxed">
                  {subject.description}
                </p>

                <div className="flex items-center space-x-2">
                  <span className={`${colors.textColor} text-sm font-semibold`}>•</span>
                  <span className="text-sm text-gray-600">{subject.levels}</span>
                </div>
              </article>
            );
          })}
        </div>

        {/* LEARNING MODES */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Flexible Learning Options
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the learning format that works best for your academic needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="text-center p-6 border-2 border-gray-200 rounded-xl hover:border-blue-500 transition-colors duration-200">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                Individual Tutoring
              </h4>
              <p className="text-gray-600 mb-4">
                One-on-one sessions for personalized attention
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Customized curriculum</li>
                <li>• Flexible scheduling</li>
                <li>• Immediate doubt resolution</li>
              </ul>
            </div>

            <div className="text-center p-6 border-2 border-blue-500 rounded-xl bg-blue-50">
              <h4 className="text-xl font-semibold text-blue-900 mb-3">
                Small Group Classes
              </h4>
              <p className="text-blue-700 mb-4">
                Interactive learning with 4-6 students
              </p>
              <ul className="text-sm text-blue-700 space-y-2">
                <li>• Peer learning</li>
                <li>• Cost-effective</li>
                <li>• Collaborative problem solving</li>
              </ul>
            </div>

            <div className="text-center p-6 border-2 border-gray-200 rounded-xl hover:border-blue-500 transition-colors duration-200">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                Online Sessions
              </h4>
              <p className="text-gray-600 mb-4">
                Learn from the comfort of your home
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Digital whiteboard</li>
                <li>• Recorded sessions</li>
                <li>• Interactive tools</li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;
