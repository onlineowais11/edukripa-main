import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Priya Sharma',
      grade: 'Class 10 Student',
      subject: 'Mathematics & Physics',
      rating: 5,
      text: "Edukripa's personalized approach helped me improve my mathematics scores from 65% to 95%. The tutors are incredibly patient and make complex concepts easy to understand.",
      improvement: '30% improvement'
    },
    {
      name: 'Rajesh Kumar',
      grade: 'Parent',
      subject: 'Chemistry & Biology',
      rating: 5,
      text: "My daughter struggled with chemistry for months. After joining Edukripa, her confidence soared and she scored 92% in her board exams. Highly recommended!",
      improvement: 'Board topper'
    },
    {
      name: 'Anita Desai',
      grade: 'Class 10 Student',
      subject: 'All Subjects',
      rating: 5,
      text: "The comprehensive approach at Edukripa helped me excel across all subjects. The regular tests and feedback sessions were particularly helpful for exam preparation.",
      improvement: 'All-round excellence'
    },
    {
      name: 'Dr. Mehta',
      grade: 'Parent',
      subject: 'JEE Preparation',
      rating: 5,
      text: "Excellent coaching for JEE preparation. My son cleared JEE Advanced with a good rank. The structured curriculum and mock tests were invaluable.",
      improvement: 'JEE Advanced cleared'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            What Our Students Say
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Success stories from students and parents who have experienced 
            the difference our personalized tutoring makes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1"
            >
              <div className="flex items-center mb-4">
                <Quote className="h-8 w-8 text-blue-600 mr-3" />
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                "{testimonial.text}"
              </p>
              
              <div className="border-t border-gray-200 pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.grade}</p>
                    <p className="text-blue-600 font-medium text-sm">{testimonial.subject}</p>
                  </div>
                  <div className="text-right">
                    <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {testimonial.improvement}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white bg-opacity-10 rounded-2xl p-8 text-center backdrop-blur-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-blue-100">Happy Students</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">98%</div>
              <div className="text-blue-100">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">15+</div>
              <div className="text-blue-100">Subjects Covered</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">5</div>
              <div className="text-blue-100">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;