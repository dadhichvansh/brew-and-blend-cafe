const MenuCard = ({ visibleItems }) => {
  return (
    <>
      {visibleItems.map((item, index) => (
        <div
          key={item.id}
          className="bg-white/50 backdrop-blur-sm rounded-lg overflow-hidden shadow-md transition-all duration-500 hover:scale-[1.02] opacity-0 animate-fade-up mx-5"
          style={{
            animationDelay: `${index * 100}ms`,
            animationFillMode: "forwards",
          }}
        >
          <div className="h-48 overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
            />
          </div>
          <div className="p-6">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-playfair">{item.title}</h3>
              <span className="text-coffee-dark font-medium">{item.price}</span>
            </div>
            <p className="text-muted-foreground mb-4">{item.description}</p>
            <div className="pt-2 border-t-[0.1px] border-coffee-medium-50">
              <span className="text-sm inline-block bg-coffee-lightest text-coffee-dark px-3 py-1 rounded-full">
                {item.category === "coffee" ? "Coffee" : "Pastry"}
              </span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export { MenuCard };
