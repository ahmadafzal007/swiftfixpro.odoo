import { createContext, useContext, useEffect, useState } from "react";

// Define audio and transcript file names
const filePrefixes = {
  "Hello": {
    audio: "Hi.wav",
    transcript: "Hi.json",
    answer: "Hi! How can I assist you",
  },
  "Hi ": {
    audio: "Hi.wav",
    transcript: "Hi.json",
    answer: "Hi! How can I assist you",
  },
  "How are you": {
    audio: "fine.wav",
    transcript: "fine.json",
    answer: "I am fine! How can I help you.",
  },

  "What services": {
    audio: "services.wav",
    transcript: "services.json",
    answer: "SwiftFixPro offers a comprehensive range of services, including drilling, plumbing, air conditioning maintenance and servicing, cleaning services, furniture moving/disposal services, upholstery and mattress cleaning, electrical services, door and window replacement or installation, demolition works, renovation services, painting services, and waterproofing works.",
  },
  "about your services": {
    audio: "services.wav",
    transcript: "services.json",
    answer: "SwiftFixPro offers a comprehensive range of services, including drilling, plumbing, air conditioning maintenance and servicing, cleaning services, furniture moving/disposal services, upholstery and mattress cleaning, electrical services, door and window replacement or installation, demolition works, renovation services, painting services, and waterproofing works.",
  },
  "How many types of services": {
    audio: "services.wav",
    transcript: "services.json",
    answer: "SwiftFixPro offers a comprehensive range of services, including drilling, plumbing, air conditioning maintenance and servicing, cleaning services, furniture moving/disposal services, upholstery and mattress cleaning, electrical services, door and window replacement or installation, demolition works, renovation services, painting services, and waterproofing works.",
  },
  "mission": {
    audio: "mission.wav",
    transcript: "mission.json",
    answer: "Our mission is to deliver exceptional handyman services that enhance the comfort, functionality, and value of your home and office spaces. We strive to provide prompt, reliable, and high-quality solutions tailored to your unique needs with a focus on professionalism, expertise, and customer satisfaction.",
  },
  "vision": {
    audio: "vision.wav",
    transcript: "vision.json",
    answer: "Our vision is to become the leading handyman service provider renowned for our excellence, reliability, and customer-centric approach. We aim to set the standard in the industry by continually improving our services, embracing innovation, and fostering a culture of trust and integrity.",
  },
  "values": {
    audio: "values.wav",
    transcript: "values.json",
    answer: "Our key values include expertise and experience, reliability and punctuality, comprehensive services, quality craftsmanship, customer satisfaction, trust and integrity, affordable pricing, safety and cleanliness, flexible scheduling, and community commitment.",
  },
  "choose": {
    audio: "choose.wav",
    transcript: "choose.json",
    answer: "You should choose SwiftFixPro for our expertise and experience, reliability and punctuality, comprehensive services, quality craftsmanship, customer satisfaction, trust and integrity, affordable pricing, safety and cleanliness, flexible scheduling, and commitment to the community.",
  },
  "TV mounting": {
    audio: "TV mounting.wav",
    transcript: "TV mounting.json",
    answer: "TV mounting services at SwiftFixPro start at $75 per hour.",
  },
  "furniture assembly": {
    audio: "furniture assembly.wav",
    transcript: "furniture assembly.json",
    answer: "Furniture assembly services at SwiftFixPro start at $50 per hour.",
  },
  "painting": {
    audio: "painting.wav",
    transcript: "painting.json",
    answer: "Painting services at SwiftFixPro start at $75 per hour.",
  },
  "bathroom remodelling": {
    audio: "bathroom remodeling.wav",
    transcript: "bathroom remodeling.json",
    answer: "Bathroom remodeling services at SwiftFixPro start at $500.",
  },
  "handyman": {
    audio: "handyman.wav",
    transcript: "handyman.json",
    answer: "General handyman services at SwiftFixPro start at $50 per hour.",
  },
  "Which service": {
    audio: "services.wav",
    transcript: "services.json",
    answer: "SwiftFixPro offers a comprehensive range of services, including drilling, plumbing, air conditioning maintenance and servicing, cleaning services, furniture moving/disposal services, upholstery and mattress cleaning, electrical services, door and window replacement or installation, demolition works, renovation services, painting services, and waterproofing works.",
  },
  "drilling": {
    audio: "drilling.wav",
    transcript: "drilling.json",
    answer: "SwiftFixPro provides a wide range of drilling services, including hole drilling, anchor bolt drilling and installation, pilot hole drilling, countersinking, counterboring, doweling, pocket hole drilling, core drilling, concrete drilling, tile drilling, metal drilling, precision drilling, and glass drilling.",
  },
  "waterproofing": {
    audio: " waterproofing.wav",
    transcript: " waterproofing.json",
    answer: "Yes, SwiftFixPro offers expert waterproofing services designed to protect your property from water damage and ensure the longevity of your structures.",
  },
  "electrical": {
    audio: "electrical.wav",
    transcript: "electrical.json",
    answer: "Yes, SwiftFixPro provides electrical services for various installation and repair needs.",
  },
  "types of cleaning": {
    audio: "cleaning.wav",
    transcript: "cleaning.json",
    answer: "SwiftFixPro offers cleaning services, including upholstery and mattress cleaning, as well as general cleaning services for home and office needs.",
  },
  "type of cleaning": {
    audio: "cleaning.wav",
    transcript: "cleaning.json",
    answer: "SwiftFixPro offers cleaning services, including upholstery and mattress cleaning, as well as general cleaning services for home and office needs.",
  },
  "provides air conditioning": {
    audio: "air conditioning.wav",
    transcript: "air conditioning.json",
    answer: "Yes, SwiftFixPro provides air conditioning maintenance and servicing to ensure your systems operate efficiently.",
  },
  "provide air conditioning": {
    audio: "air conditioning.wav",
    transcript: "air conditioning.json",
    answer: "Yes, SwiftFixPro provides air conditioning maintenance and servicing to ensure your systems operate efficiently.",
  },
  "offer air conditioning": {
    audio: "air conditioning.wav",
    transcript: "air conditioning.json",
    answer: "Yes, SwiftFixPro provides air conditioning maintenance and servicing to ensure your systems operate efficiently.",
  },
  "offers air conditioning": {
    audio: "air conditioning.wav",
    transcript: "air conditioning.json",
    answer: "Yes, SwiftFixPro provides air conditioning maintenance and servicing to ensure your systems operate efficiently.",
  },
  "focus": {
    audio: "focus.wav",
    transcript: "focus.json",
    answer: "The main focus of SwiftFixPro is to deliver high-quality handyman services with a focus on professionalism, expertise, and customer satisfaction.",
  },
  "satisfaction": {
    audio: "satisfaction.wav",
    transcript: "satisfaction.json",
    answer: "SwiftFixPro ensures customer satisfaction by listening to client needs, providing transparent communication, and working diligently to exceed expectations on every project.",
  },
  "trustworthy": {
    audio: "trustworthy.wav",
    transcript: "trustworthy.json",
    answer: "SwiftFixPro builds trust through honest and ethical business practices, being respectful, courteous, and fair in all dealings.",
  },
  "safety": {
    audio: "safety.wav",
    transcript: "safety.json",
    answer: "SwiftFixPro adheres to strict safety protocols and maintains a clean and organized work environment to ensure the safety of your property and their team.",
  },
  "scheduling": {
    audio: "scheduling.wav",
    transcript: "scheduling.json",
    answer: "Yes, SwiftFixPro offers flexible appointment times to fit your convenience, including evenings and weekends.",
  },
  "fixture": {
    audio: "fixtures.wav",
    transcript: "fixtures.json",
    answer: "SwiftFixPro offers installation and repair services for faucets, sinks, bathtubs, showers, showerheads, and toilets.",
  },
  "fixtures": {
    audio: "fixtures.wav",
    transcript: "fixtures.json",
    answer: "SwiftFixPro offers installation and repair services for faucets, sinks, bathtubs, showers, showerheads, and toilets.",
  },
  "leak": {
    audio: "leaks.wav",
    transcript: "leaks.json",
    answer: "We find and fix leaks in pipes, fixtures, and fittings, and repair or replace leaky faucets and showerheads.",
  },
  "leaks": {
    audio: "leaks.wav",
    transcript: "leaks.json",
    answer: "We find and fix leaks in pipes, fixtures, and fittings, and repair or replace leaky faucets and showerheads.",
  },
  "pipe": {
    audio: "pipes.wav",
    transcript: "pipes.json",
    answer: "We install new plumbing pipes for water supply and drainage and repair or replace damaged or corroded pipes.",
  },
  "pipes": {
    audio: "pipes.wav",
    transcript: "pipes.json",
    answer: "We install new plumbing pipes for water supply and drainage and repair or replace damaged or corroded pipes.",
  },
  "drain": {
    audio: "drains.wav",
    transcript: "drains.json",
    answer: "We clear clogged drains in sinks, bathtubs, showers, and clean out blocked toilets and sewer lines.",
  },
  "drains": {
    audio: "drains.wav",
    transcript: "drains.json",
    answer: "We clear clogged drains in sinks, bathtubs, showers, and clean out blocked toilets and sewer lines.",
  },
  "water heater": {
    audio: "water heaters.wav",
    transcript: "water heaters.json",
    answer: "We install new water heaters (tank and tankless) and repair or maintain existing water heaters.",
  },
  "water heaters": {
    audio: "water heaters.wav",
    transcript: "water heaters.json",
    answer: "We install new water heaters (tank and tankless) and repair or maintain existing water heaters.",
  },
  "garbage disposal": {
    audio: "garbage disposal.wav",
    transcript: "garbage disposal.json",
    answer: "Yes, we set up new garbage disposal systems and fix or replace faulty units.",
  },
  "sump pumps": {
    audio: "sump pumps.wav",
    transcript: "sump pumps.json",
    answer: "We install sump pumps to prevent basement flooding and repair or replace faulty sump pumps.",
  },
  "sump pump": {
    audio: "sump pumps.wav",
    transcript: "sump pumps.json",
    answer: "We install sump pumps to prevent basement flooding and repair or replace faulty sump pumps.",
  },
  "filtration": {
    audio: "filtration.wav",
    transcript: "filtration.json",
    answer: "Yes, we install both whole-house and under-sink water filtration systems.",
  },
  "outdoor": {
    audio: "outdoor.wav",
    transcript: "outdoor.json",
    answer: "We install or repair outdoor faucets and irrigation systems for lawns and gardens.",
  },
  "remodeling": {
    audio: "remodeling.wav",
    transcript: "remodeling.json",
    answer: "We update plumbing fixtures during remodeling projects and relocate pipes and drains for new layouts.",
  },
  "backflow": {
    audio: "backflow.wav",
    transcript: "backflow.json",
    answer: "We test for backflow issues in water supply systems and install backflow prevention devices.",
  },
  "gas lines": {
    audio: "gas lines.wav",
    transcript: "gas lines.json",
    answer: " Yes, we install and repair gas lines for appliances such as stoves, water heaters, and fireplaces.",
  },
  "gas line": {
    audio: "gas lines.wav",
    transcript: "gas lines.json",
    answer: " Yes, we install and repair gas lines for appliances such as stoves, water heaters, and fireplaces.",
  },
  "insulation": {
    audio: "insulation.wav",
    transcript: "insulation.json",
    answer: "We insulate pipes to prevent freezing and improve energy efficiency.",
  },
  "insulations": {
    audio: "insulation.wav",
    transcript: "insulation.json",
    answer: "We insulate pipes to prevent freezing and improve energy efficiency.",
  },
  "septic": {
    audio: "septic.wav",
    transcript: "septic.json",
    answer: "We inspect and maintain septic systems and repair or replace components as needed.",
  },
  "conditioning servicing": {
    audio: "conditioning servicing.wav",
    transcript: "conditioning servicing.json",
    answer: "We offer air conditioning servicing, chemical washes, chemical overhauls, gas filling, installation, and repair.",
  },
  "chemical wash": {
    audio: "chemical wash.wav",
    transcript: "chemical wash.json",
    answer: "We perform chemical washes to clean the coils and components of your air conditioning system, improving efficiency.",
  },
  "gas filling": {
    audio: "gas filling.wav",
    transcript: "gas filling.json",
    answer: "We check and refill the refrigerant gas levels in your air conditioning system to ensure it operates efficiently.",
  },
  "gas fillings": {
    audio: "gas filling.wav",
    transcript: "gas filling.json",
    answer: "We check and refill the refrigerant gas levels in your air conditioning system to ensure it operates efficiently.",
  },
  "ductwork": {
    audio: "ductwork.wav",
    transcript: "ductwork.json",
    answer: "We inspect ductwork for leaks, damage, and cleanliness, and clean ducts to remove dust and debris buildup.",
  },
  "air conditioning performance": {
    audio: "performance.wav",
    transcript: "performance.json",
    answer: "We conduct system performance testing to measure output, check airflow, and ensure temperature control meets performance standards.",
  },
  "air conditioning filters": {
    audio: "filters.wav",
    transcript: "filters.json",
    answer: "We replace or clean air filters to ensure proper airflow and efficiency in your air conditioning system.",
  },
  "air conditioning filter": {
    audio: "filters.wav",
    transcript: "filters.json",
    answer: "We replace or clean air filters to ensure proper airflow and efficiency in your air conditioning system.",
  },
  "fan": {
    audio: "fan.wav",
    transcript: "fan.json",
    answer: "We inspect and clean fan blades and blower components to ensure smooth operation of your air conditioning system.",
  },
  "fans": {
    audio: "fan.wav",
    transcript: "fan.json",
    answer: "We inspect and clean fan blades and blower components to ensure smooth operation of your air conditioning system.",
  },
  "inspection": {
    audio: "inspection.wav",
    transcript: "inspection.json",
    answer: "We conduct a thorough inspection of the entire air conditioning system to identify potential issues and ensure optimal performance.",
  },
  "refrigerant": {
    audio: "refrigerant.wav",
    transcript: "refrigerant.json",
    answer: "We check refrigerant levels and ensure there are no leaks to maintain optimal cooling efficiency.",
  },
  "residential": {
    audio: "residential.wav",
    transcript: "residential.json",
    answer: "We offer general house cleaning, deep cleaning, carpet and upholstery cleaning, window cleaning, move-in/move-out cleaning, post-renovation cleaning, appliance cleaning, organizing and decluttering, and outdoor cleaning.",
  },
  "commercial": {
    audio: "commercial.wav",
    transcript: "commercial.json",
    answer: "We provide office cleaning, retail store cleaning, restaurant cleaning, industrial cleaning, medical facility cleaning, school and daycare cleaning, post-event cleaning, window cleaning, carpet and floor maintenance, janitorial services, pressure washing, and specialty cleaning.",
  },
  "post renovation": {
    audio: "post renovation.wav",
    transcript: "post renovation.json",
    answer: "We remove dust and debris after renovations or construction and clean all surfaces, windows, and floors.",
  },
  "upholstery": {
    audio: "upholstery.wav",
    transcript: "upholstery.json",
    answer: "We offer steam cleaning of carpets and rugs, spot cleaning stains, and cleaning and deodorizing upholstery.",
  },
  "office cleaning": {
    audio: "office.wav",
    transcript: "office.json",
    answer: "Our office cleaning services include dusting, vacuuming, mopping floors, cleaning and sanitizing restrooms and break rooms, emptying trash bins, and cleaning office windows and mirrors.",
  },
  "offices cleaning": {
    audio: "office.wav",
    transcript: "office.json",
    answer: "Our office cleaning services include dusting, vacuuming, mopping floors, cleaning and sanitizing restrooms and break rooms, emptying trash bins, and cleaning office windows and mirrors.",
  },
  "medical": {
    audio: "medical.wav",
    transcript: "medical.json",
    answer: "We clean and sanitize examination rooms and waiting areas, disinfect surfaces and medical equipment, and empty biohazard waste bins.",
  },
  "move in": {
    audio: "move in.wav",
    transcript: "move in.json",
    answer: "We perform deep cleaning of vacant homes or apartments and ensure all surfaces are clean for new occupants.",
  },
  "move-in": {
    audio: "move in.wav",
    transcript: "move in.json",
    answer: "We perform deep cleaning of vacant homes or apartments and ensure all surfaces are clean for new occupants.",
  },
  "organizing": {
    audio: "organizing.wav",
    transcript: "organizing.json",
    answer: "We help with home organization and decluttering, and assist with garage or basement cleanouts.",
  },
  "janitorial": {
    audio: "janitorial.wav",
    transcript: "janitorial.json",
    answer: "We offer regular maintenance cleaning for businesses, including replenishing supplies such as soap, paper towels, and toilet paper.",
  },
  "assembly": {
    audio: "assembly.wav",
    transcript: "assembly.json",
    answer: "We provide services for assembling new furniture from flat packs or boxes and disassembling furniture for moving or disposal.",
  },
  "rearrangement": {
    audio: "rearrangement.wav",
    transcript: "rearrangement.json",
    answer: "We help with moving furniture within the home for redecorating or cleaning, including heavy lifting and positioning of items.",
  },
  "rearranging": {
    audio: "rearrangement.wav",
    transcript: "rearrangement.json",
    answer: "We help with moving furniture within the home for redecorating or cleaning, including heavy lifting and positioning of items.",
  },
  "packing": {
    audio: "packing.wav",
    transcript: "packing.json",
    answer: "We carefully pack furniture and household items for a move and unpack and set up furniture at the new location.",
  },
  "storage": {
    audio: "storage.wav",
    transcript: "storage.json",
    answer: "We offer short-term storage solutions for furniture during home renovations or moves.",
  },
  "removal": {
    audio: "removal.wav",
    transcript: "removal.json",
    answer: "We remove and dispose of unwanted furniture, including donating usable items to charities or recycling centers.",
  },
  "heavy": {
    audio: "heavy.wav",
    transcript: "heavy.json",
    answer: "Yes, we specialize in moving large or heavy items such as pianos, safes, or pool tables.",
  },
  "estate": {
    audio: "estate.wav",
    transcript: "estate.json",
    answer: "Yes, we clear out furniture and belongings from estates, coordinating disposal, donation, or sale of items.",
  },
  "relocation": {
    audio: "relocation.wav",
    transcript: "relocation.json",
    answer: "Yes, we move office furniture and equipment to new locations, coordinating logistics for efficient moves.",
  },
  "relocations": {
    audio: "relocation.wav",
    transcript: "relocation.json",
    answer: "Yes, we move office furniture and equipment to new locations, coordinating logistics for efficient moves.",
  },
  "cubicles": {
    audio: "cubicles.wav",
    transcript: "cubicles.json",
    answer: "Yes, we set up and take down office cubicles and partitions.",
  },
  "layouts": {
    audio: "layouts.wav",
    transcript: "layouts.json",
    answer: "We rearrange office furniture for new layouts or reconfigurations, assisting with workspace optimization.",
  },
 
  "recycling": {
    audio: "recycling.wav",
    transcript: "recycling.json",
    answer: "We coordinate the recycling of furniture and materials that can be repurposed, ensuring environmentally friendly disposal practices.",
  },
  "stains": {
    audio: "stains.wav",
    transcript: "stains.json",
    answer: "We treat and remove stains caused by spills, pets, and everyday use, using specialized cleaning agents to tackle tough stains.",
  },
  "stain": {
    audio: "stains.wav",
    transcript: "stains.json",
    answer: "We treat and remove stains caused by spills, pets, and everyday use, using specialized cleaning agents to tackle tough stains.",
  },
 
  "deep cleaning": {
    audio: "extraction.wav",
    transcript: "extraction.json",
    answer: "We perform a thorough deep clean using steam or hot water extraction, ensuring deep-seated dirt and grime are removed.",
  },
  "mattress cleaning": {
    audio: "mattress.wav",
    transcript: "mattress.json",
    answer: "We clean and sanitize mattresses, removing dust mites, allergens, and stains, ensuring a hygienic sleeping environment.",
  },
  "sanitizing": {
    audio: "sanitizing.wav",
    transcript: "sanitizing.json",
    answer: "Yes, we use sanitizing treatments to remove bacteria and allergens from mattresses.",
  },
  "mold": {
    audio: "mold.wav",
    transcript: "mold.json",
    answer: "We treat and remove mold and mildew from upholstery, ensuring safe and effective remediation.",
  },
  "water": {
    audio: "water.wav",
    transcript: "water.json",
    answer: "We dry and clean water-damaged upholstery and mattresses, preventing mold growth and restoring their condition.",
  },
  "general house clean": {
    audio: "general.wav",
    transcript: "general.json",
    answer: "We provide dusting, vacuuming, mopping, and sanitizing of all rooms in your home, ensuring a clean and healthy environment.",
  },
  "appliance": {
    audio: "appliance.wav",
    transcript: "appliance.json",
    answer: "We clean and sanitize kitchen appliances, including ovens, refrigerators, and microwaves, ensuring they are free of grime and buildup.",
  },
  "cars": {
    audio: "cars.wav",
    transcript: "cars.json",
    answer: "We clean and detail car upholstery, removing stains, odors, and pet hair from car seats and carpets.",
  },
  "car": {
    audio: "cars.wav",
    transcript: "cars.json",
    answer: "We clean and detail car upholstery, removing stains, odors, and pet hair from car seats and carpets.",
  },
  "sorry": {
    audio: "sorry.wav",
    transcript: "sorry.json",
    answer: "Sorry I don't have that information, kindly contact our helpline number or email us at sales@switffixpro.com for any further queries.",
  },
};

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cameraZoomed, setCameraZoomed] = useState(true);
  const [message, setMessage] = useState(null);

  // Fetch base64 encoded audio file
  const getBase64 = async (url) => {
    const response = await fetch(url);
    const blob = await response.blob();
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result.split(",")[1]);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  };

  // Fetch JSON transcript
  const fetchJson = async (url) => {
    const response = await fetch(url);
    return response.json();
  };

  // Process user chat message with audio
  const chat = async (userMessage) => {
    setLoading(true);

    let filePrefix = "sorry"; // Default to "sorry" if no matching prefix found

    if (userMessage && userMessage.trim() !== "") {
      const messageLowerCase = userMessage.toLowerCase();
      for (const key in filePrefixes) {
        if (messageLowerCase.includes(key.toLowerCase())) {
          filePrefix = key;
          break;
        }
      }
    }

    const fileName = filePrefixes[filePrefix];
    const audioUrl = `./audios/${fileName.audio}`;
    const transcriptUrl = `./audios/${fileName.transcript}`;

    const message = {
      text: filePrefix === "sorry" ? "Sorry, I couldn't understand that." : `Playing audio for ${filePrefix.replace(/\d\./, '').replace(/\./g, ' ')}`,
      audio: await getBase64(audioUrl),
      lipsync: await fetchJson(transcriptUrl),
      facialExpression: "smile",
      animation: "Idle",
      answer: fileName.answer,
    };

    setMessages((prevMessages) => [...prevMessages, message]);
    setLoading(false);
  };

  // Process user chat message without audio
  const chatWithoutAudio = async (userMessage) => {
    setLoading(true);

    let filePrefix = "sorry"; // Default to "sorry" if no matching prefix found

    if (userMessage && userMessage.trim() !== "") {
      const messageLowerCase = userMessage.toLowerCase();
      for (const key in filePrefixes) {
        if (messageLowerCase.includes(key.toLowerCase())) {
          filePrefix = key;
          break;
        }
      }
    }

    const message = {
      text: filePrefix === "sorry" ? "Sorry, I couldn't understand that." : filePrefixes[filePrefix].answer,
    };

    setMessages((prevMessages) => [...prevMessages, message]);
    setLoading(false);
  };

  useEffect(() => {
    if (messages.length > 0) {
      setMessage(messages[messages.length - 1]);
    } else {
      setMessage(null);
    }
  }, [messages]);

  const onMessagePlayed = () => {
    setMessages((prevMessages) => prevMessages.slice(1));
  };

  return (
    <ChatContext.Provider
      value={{
        chat,
        chatWithoutAudio,
        message,
        onMessagePlayed,
        loading,
        cameraZoomed,
        setCameraZoomed,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useChat must be used within a ChatProvider");
  }
  return context;
};
