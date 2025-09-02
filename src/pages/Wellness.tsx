import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  UserCircle, 
  Bell, 
  Users, 
  Dumbbell, 
  Sparkles, 
  ArrowRight,
  Heart,
  Zap,
  Waves,
  Flower2,
  X
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface WellnessCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  image: string;
  features: string[];
  path: string;
}

const wellnessCategories: WellnessCategory[] = [
  {
    id: 'coaches',
    title: 'Coachs & activités',
    subtitle: '🧘 Accompagnement personnalisé',
    description: 'Trouvez des coachs sportifs, nutritionnistes et thérapeutes près de vous',
    icon: <Users className="w-8 h-8 text-purple-600" />,
    color: 'from-purple-400 to-indigo-500',
    bgColor: 'bg-purple-50',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=600&h=400',
    features: ['Coachs sportifs', 'Nutritionnistes', 'Thérapeutes', 'Cours en groupe'],
    path: '/wellness/coaches'
  },
  {
    id: 'facilities',
    title: 'Salles & infrastructures',
    subtitle: '🏋️ Équipements sportifs',
    description: 'Accédez aux meilleures salles de sport et infrastructures sportives',
    icon: <Dumbbell className="w-8 h-8 text-blue-600" />,
    color: 'from-blue-400 to-cyan-500',
    bgColor: 'bg-blue-50',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600&h=400',
    features: ['Salles de sport', 'Piscines', 'Courts de tennis', 'Centres fitness'],
    path: '/wellness/facilities'
  },
  {
    id: 'relaxation',
    title: 'Spas & détente',
    subtitle: '💆 Relaxation et soins',
    description: 'Détendez-vous dans les meilleurs spas et centres de bien-être',
    icon: <Sparkles className="w-8 h-8 text-emerald-600" />,
    color: 'from-emerald-400 to-teal-500',
    bgColor: 'bg-emerald-50',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=600&h=400',
    features: ['Spas & hammams', 'Massages', 'Cryothérapie', 'Yoga & méditation'],
    path: '/wellness/relaxation'
  }
];

export default function Wellness() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [showNotifications, setShowNotifications] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    hover: {
      scale: 1.03,
      y: -8,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-200/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-teal-200/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />

      {/* Header */}
      <header className="relative z-10 bg-white/70 backdrop-blur-sm border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center">
            <button 
              onClick={() => navigate('/')}
              className="p-2 hover:bg-white/10 rounded-full transition-colors mr-2"
            >
              <ArrowLeft className="w-5 h-5 text-[#424e6f]" />
            </button>
            <img 
              src="https://i.imgur.com/jxMQcJi.png" 
              alt="MyBakup" 
              className="h-6"
            />
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="p-1.5 hover:bg-white/10 rounded-full transition-colors relative"
              >
                <Bell className="w-5 h-5 text-[#424e6f]" />
              </button>
            </div>
            <button
              onClick={() => navigate('/profile')}
              className="p-1.5 hover:bg-white/10 rounded-full transition-colors"
            >
              <UserCircle className="w-5 h-5 text-[#424e6f]" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <motion.main 
        className="relative z-10 max-w-6xl mx-auto px-4 py-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Welcome Section */}
        <motion.div 
          className="text-center mb-12"
          variants={itemVariants}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Flower2 className="w-8 h-8 text-green-600" />
            <h1 className="text-3xl md:text-4xl font-bold text-green-700">
              Bien-être en voyage
            </h1>
          </div>
          <p className="text-lg text-gray-600 mb-2">
            Prenez soin de votre corps et de votre esprit
          </p>
          <p className="text-sm text-gray-500 max-w-2xl mx-auto">
            Découvrez une sélection de professionnels du bien-être, d'infrastructures sportives et de centres de détente pour enrichir votre expérience de voyage
          </p>
        </motion.div>

        {/* User Welcome Message */}
        {user && (
          <motion.div 
            className="text-center mb-8"
            variants={itemVariants}
          >
            <p className="text-lg text-green-700">
              Bonjour <span className="font-semibold">{user.firstName}</span> ! 🌿
            </p>
            <p className="text-gray-600 mt-1">
              Que souhaitez-vous découvrir aujourd'hui ?
            </p>
          </motion.div>
        )}

        {/* Wellness Categories */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12"
          variants={itemVariants}
        >
          {wellnessCategories.map((category, index) => (
            <motion.div
              key={category.id}
              variants={cardVariants}
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate(category.path)}
              onMouseEnter={() => setHoveredCard(category.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`relative ${category.bgColor} rounded-2xl overflow-hidden cursor-pointer border border-white/50 shadow-lg group`}
            >
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                
                {/* Icon overlay */}
                <motion.div 
                  className="absolute top-4 right-4 p-3 rounded-full bg-white/20 backdrop-blur-sm"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {category.icon}
                </motion.div>
                
                {/* Title overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {category.title}
                  </h3>
                  <p className="text-white/90 text-sm">
                    {category.subtitle}
                  </p>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  {category.description}
                </p>
                
                <div className="space-y-2">
                  {category.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <motion.div 
                  className="flex items-center gap-2 text-green-600 font-medium pt-2"
                  animate={{ 
                    x: hoveredCard === category.id ? [0, 5, 0] : 0 
                  }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: hoveredCard === category.id ? Infinity : 0,
                    repeatType: "loop"
                  }}
                >
                  <span>Découvrir</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Benefits Section */}
        <motion.div 
          className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/50"
          variants={itemVariants}
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-green-700 mb-2">
              Pourquoi choisir MyBakup Bien-être ?
            </h2>
            <p className="text-gray-600">
              Une approche holistique de votre bien-être en voyage
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center space-y-3">
              <div className="p-4 rounded-full bg-purple-100 w-fit mx-auto">
                <Heart className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-800">Professionnels certifiés</h3>
              <p className="text-sm text-gray-600">
                Tous nos partenaires sont vérifiés et certifiés dans leur domaine
              </p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="p-4 rounded-full bg-blue-100 w-fit mx-auto">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-800">Réservation instantanée</h3>
              <p className="text-sm text-gray-600">
                Réservez vos séances en quelques clics, où que vous soyez
              </p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="p-4 rounded-full bg-emerald-100 w-fit mx-auto">
                <Waves className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-gray-800">Expérience sur-mesure</h3>
              <p className="text-sm text-gray-600">
                Des recommandations personnalisées selon vos préférences
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-8"
          variants={itemVariants}
        >
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 text-gray-500 hover:text-green-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Retour aux services santé</span>
          </button>
        </motion.div>
      </motion.main>
    </div>
  );
}