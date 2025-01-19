import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const products = [
  {
    id: 1,
    name: 'Biodigester Tank',
    category: 'tanks',
    price: 38500,
    image: '/placeholder.svg?height=200&width=200&text=Biodigester+Tank',
    description: 'High-capacity Biodigester Tank for large households.',
  },
  {
    id: 2,
    name: 'Enzyme Mix',
    category: 'additives',
    price: 5498.90,
    image: 'https://i.pinimg.com/736x/90/6a/3c/906a3c2e0ec8f5bcb51955953d00d55a.jpg',
    description: 'Specially formulated Enzyme Mix to boost performance.',
  },
  {
    id: 3,
    name: 'Waste Shredder',
    category: 'equipment',
    price: 65998.90,
    image: '/placeholder.svg?height=200&width=200&text=Waste+Shredder',
    description: 'Industrial-grade Waste Shredder for preprocessing.',
  },
  {
    id: 4,
    name: 'Biogas Stove',
    category: 'appliances',
    price: 32998.90,
    image: '/placeholder.svg?height=200&width=200&text=Biogas+Stove',
    description: 'Efficient Biogas Stove for biogas use.',
  },
  {
    id: 5,
    name: 'pH Testing Kit',
    category: 'accessories',
    price: 8798.90,
    image: '/placeholder.svg?height=200&width=200&text=pH+Testing+Kit',
    description: 'Comprehensive pH Testing Kit for maintenance.',
  },
  {
    id: 6,
    name: 'Compact Biodigester',
    category: 'tanks',
    price: 164998.90,
    image: '/placeholder.svg?height=200&width=200&text=Compact+Biodigester',
    description: 'Space-saving Compact Biodigester for small households.',
  },
  {
    id: 7,
    name: 'Biogas Purifier',
    category: 'equipment',
    price: 87998.90,
    image: '/placeholder.svg?height=200&width=200&text=Biogas+Purifier',
    description: 'Advanced Biogas Purifier for enhanced gas quality.',
  },
  {
    id: 8,
    name: 'Anaerobic Bacteria Mix',
    category: 'additives',
    price: 4398.90,
    image: '/placeholder.svg?height=200&width=200&text=Bacteria+Mix',
    description: 'Selected blend of Anaerobic Bacteria for systems.',
  },
];

const ShopPage = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [filter, setFilter] = useState('all');
  const [sort, setSort] = useState('name');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  useEffect(() => {
    let result = [...products];
    if (filter !== 'all') {
      result = result.filter(product => product.category === filter);
    }
    switch (sort) {
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'priceLow':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'priceHigh':
        result.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }
    setFilteredProducts(result);
  }, [filter, sort]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const addToWishlist = (product) => {
    setWishlist([...wishlist, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const removeFromWishlist = (productId) => {
    setWishlist(wishlist.filter(item => item.id !== productId));
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-KE', {
      style: 'currency',
      currency: 'KES',
      minimumFractionDigits: 2,
    }).format(price);
  };

  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '1rem',
      fontFamily: 'Arial, sans-serif',
    },
    iconWrapper: {
      position: 'fixed',
      top: '1rem',
      right: '1rem',
      display: 'flex',
      gap: '1rem',
      zIndex: 1000,
    },
    icon: {
      fontSize: '24px',
      backgroundColor: 'white',
      borderRadius: '50%',
      width: '40px',
      height: '40px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      cursor: 'pointer',
    },
    iconBadge: {
      position: 'relative',
      cursor: 'pointer',
    },
    badge: {
      position: 'absolute',
      top: '-5px',
      right: '-5px',
      backgroundColor: '#A31621',
      color: 'white',
      borderRadius: '50%',
      width: '20px',
      height: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '0.8rem',
      fontWeight: 'bold',
    },
    filterSort: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '1rem',
      padding: '0.5rem',
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },
    select: {
      padding: '0.25rem',
      borderRadius: '4px',
      border: '1px solid #A31621',
      fontSize: '0.9rem',
      color: '#A31621',
    },
    label: {
      marginRight: '0.5rem',
      fontSize: '0.9rem',
      color: '#A31621',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
      gap: '1.5rem',
    },
    card: {
      backgroundColor: 'white',
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
    },
    cardImage: {
      width: '100%',
      height: '200px',
      objectFit: 'cover',
    },
    cardContent: {
      padding: '1rem',
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
    },
    cardTitle: {
      fontSize: '1.2rem',
      fontWeight: 'bold',
      marginBottom: '0.5rem',
      color: 'black',
    },
    cardPrice: {
      fontSize: '1rem',
      color: 'black',
      fontWeight: 'bold',
      marginBottom: '0.5rem',
    },
    cardDescription: {
      fontSize: '0.9rem',
      color: 'black',
      marginBottom: '0.75rem',
      flexGrow: 1,
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: '0.5rem',
      marginTop: 'auto',
    },
    button: {
      padding: '0.5rem 1rem',
      borderRadius: '4px',
      border: 'none',
      cursor: 'pointer',
      fontSize: '0.9rem',
      fontWeight: 'bold',
    },
    cartButton: {
      backgroundColor: '#A31621',
      color: 'white',
      flexGrow: 1,
    },
    wishlistButton: {
      backgroundColor: 'white',
      color: '#A31621',
      border: '1px solid #A31621',
    },
    modal: {
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      width: '300px',
      backgroundColor: 'white',
      boxShadow: '-2px 0 5px rgba(0,0,0,0.1)',
      padding: '1rem',
      overflowY: 'auto',
    },
    modalTitle: {
      fontSize: '1.2rem',
      color: '#A31621',
      marginBottom: '1rem',
    },
    modalItem: {
      marginBottom: '0.75rem',
      paddingBottom: '0.75rem',
      borderBottom: '1px solid #eee',
    },
    modalItemName: {
      fontSize: '0.9rem',
      fontWeight: 'bold',
      color: 'black',
    },
    modalItemPrice: {
      fontSize: '0.8rem',
      color: 'black',
    },
    removeButton: {
      backgroundColor: '#A31621',
      color: 'white',
      padding: '0.25rem 0.5rem',
      borderRadius: '4px',
      border: 'none',
      cursor: 'pointer',
      fontSize: '0.8rem',
      marginTop: '0.5rem',
    },
    closeButton: {
      width: '100%',
      backgroundColor: '#A31621',
      color: 'white',
      padding: '0.5rem',
      borderRadius: '4px',
      border: 'none',
      cursor: 'pointer',
      marginTop: '1rem',
    },
  };

  return (
    <div style={{ backgroundColor: '#f8f8f8', minHeight: '100vh', padding: '1rem' }}>
      <div style={styles.container}>
        {/* Header */}
        <div style={styles.iconWrapper}>
          <div style={styles.iconBadge} onClick={() => setIsCartOpen(true)}>
            <div style={styles.icon}>🛒</div>
            {cart.length > 0 && (
              <span style={styles.badge}>{cart.length}</span>
            )}
          </div>
          <div style={styles.iconBadge} onClick={() => setIsWishlistOpen(true)}>
            <div style={styles.icon}>❤️</div>
            {wishlist.length > 0 && (
              <span style={styles.badge}>{wishlist.length}</span>
            )}
          </div>
        </div>

        {/* Filter and Sort */}
        <div style={styles.filterSort}>
          <div>
            <label style={styles.label}>Filter by:</label>
            <select
              style={styles.select}
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="all">All Products</option>
              <option value="tanks">Tanks</option>
              <option value="additives">Additives</option>
              <option value="equipment">Equipment</option>
              <option value="appliances">Appliances</option>
              <option value="accessories">Accessories</option>
            </select>
          </div>
          <div>
            <label style={styles.label}>Sort by:</label>
            <select
              style={styles.select}
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="name">Name</option>
              <option value="priceLow">Price: Low to High</option>
              <option value="priceHigh">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div style={styles.grid}>
          {filteredProducts.map(product => (
            <motion.div
              key={product.id}
              style={styles.card}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <img src={product.image || "/placeholder.svg"} alt={product.name} style={styles.cardImage} />
              <div style={styles.cardContent}>
                <h3 style={styles.cardTitle}>{product.name}</h3>
                <p style={styles.cardPrice}>{formatPrice(product.price)}</p>
                <p style={styles.cardDescription}>{product.description}</p>
                <div style={styles.buttonContainer}>
                  <button
                    onClick={() => addToCart(product)}
                    style={{ ...styles.button, ...styles.cartButton }}
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={() => addToWishlist(product)}
                    style={{ ...styles.button, ...styles.wishlistButton }}
                  >
                    ❤️
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cart Modal */}
        <AnimatePresence>
          {isCartOpen && (
            <motion.div
              style={styles.modal}
              initial={{ x: 300 }}
              animate={{ x: 0 }}
              exit={{ x: 300 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <h2 style={styles.modalTitle}>Your Cart</h2>
              {cart.map(item => (
                <div key={item.id} style={styles.modalItem}>
                  <p style={styles.modalItemName}>{item.name}</p>
                  <p style={styles.modalItemPrice}>{formatPrice(item.price)}</p>
                  <button
                    style={styles.removeButton}
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                style={styles.closeButton}
                onClick={() => setIsCartOpen(false)}
              >
                Close
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Wishlist Modal */}
        <AnimatePresence>
          {isWishlistOpen && (
            <motion.div
              style={styles.modal}
              initial={{ x: 300 }}
              animate={{ x: 0 }}
              exit={{ x: 300 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <h2 style={styles.modalTitle}>Your Wishlist</h2>
              {wishlist.map(item => (
                <div key={item.id} style={styles.modalItem}>
                  <p style={styles.modalItemName}>{item.name}</p>
                  <p style={styles.modalItemPrice}>{formatPrice(item.price)}</p>
                  <button
                    style={styles.removeButton}
                    onClick={() => removeFromWishlist(item.id)}
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                style={styles.closeButton}
                onClick={() => setIsWishlistOpen(false)}
              >
                Close
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ShopPage;

