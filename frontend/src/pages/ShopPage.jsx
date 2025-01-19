import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import CheckoutPage from './CheckoutPage';

const products = [
  {
    id: 1,
    name: 'Biodigester Tank 1.4 M',
    category: 'tanks',
    price: 38500,
    image: 'https://s.alicdn.com/@sc04/kf/H8182e7671e774859a89f79bcd525516as.jpg',
    description: 'High-capacity Biodigester Tank for large households serving 15 people maximum.',
  },
  {
    id: 6,
    name: 'Compact Biodigester',
    category: 'tanks',
    price: 164998.90,
    image: 'https://portal.ewak.co.ke/uploads/projects/6683e7b0d07f7e2b30c7947d_cover.jpeg',
    description: 'Space-saving Compact Biodigester for small households.',
  },
  {
    id: 7,
    name: 'Bio Clean Septic Tank Cleanser Powder',
    category: 'additive',
    price: 1500,
    image: 'https://5.imimg.com/data5/SELLER/Default/2022/9/VE/TN/BV/208914/bioclean-septic-tank-cleaner-microbial-culture-for-odour-removal-500x500.jpg',
    description: 'A powerful powder that breaks down organic waste in septic systems.',
  },
  {
    id: 8,
    name: 'Bio Clean Septic Plus 10X',
    category: 'additives',
    price: 2500,
    image: 'https://www.jiomart.com/images/product/original/rvqdk7kzqk/bioclean-septic-organica-bioclean-septic-plus-10x-powerful-septic-tank-cleaner-odour-removing-bacteria-powder-degrades-food-human-waste-safe-for-all-pipes-kitchen-drain-lines-available-in-pack-of-1-250-gm-product-images-orvqdk7kzqk-p606720193-0-202312140552.jpg?im=Resize=(1000,1000)',
    description: 'An advanced septic treatment solution that enhances waste digestion and prevents system clogs for long-term maintenance.',
  },
];

const ShopPage = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem('wishlist');
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });
  const [filter, setFilter] = useState('all');
  const [sort, setSort] = useState('name');
  const [showCart, setShowCart] = useState(false);
  const [showWishlist, setShowWishlist] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);

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

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const addToWishlist = (product) => {
    if (!wishlist.find(item => item.id === product.id)) {
      setWishlist([...wishlist, product]);
    }
  };

  const removeFromWishlist = (productId) => {
    setWishlist(wishlist.filter(item => item.id !== productId));
  };

  const moveToCart = (product) => {
    addToCart(product);
    removeFromWishlist(product.id);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-KE', {
      style: 'currency',
      currency: 'KES',
      minimumFractionDigits: 2,
    }).format(price);
  };

  const incrementQuantity = (productId) => {
    setCart(cart.map(item =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decrementQuantity = (productId) => {
    setCart(cart.map(item =>
      item.id === productId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    ).filter(item => item.quantity > 0));
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleCheckout = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowCheckout(true);
    }, 2000); // Simulating a 2-second loading time
  };

  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '6rem 1rem 1rem',
      fontFamily: 'Arial, sans-serif',
      display: 'flex',
    },
    mainContent: {
      flex: 1,
      marginRight: '20px',
    },
    sidebar: {
      width: '300px',
      backgroundColor: 'white',
      padding: '1rem',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      height: 'fit-content',
    },
    iconWrapper: {
      position: 'fixed',
      top: '4.5rem',
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
      height: '160px',
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
    cartPage: {
      backgroundColor: '#f8f8f8',
      minHeight: '100vh',
      padding: '2rem',
    },
    cartContainer: {
      maxWidth: '800px',
      margin: '0 auto',
      backgroundColor: 'white',
      borderRadius: '8px',
      padding: '2rem',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    },
    cartTitle: {
      fontSize: '2rem',
      fontWeight: 'bold',
      marginBottom: '2rem',
      color: '#A31621',
      textAlign: 'center',
    },
    cartItem: {
      display: 'flex',
      borderBottom: '1px solid #eee',
      padding: '1rem 0',
      alignItems: 'center',
    },
    cartItemImage: {
      width: '100px',
      height: '100px',
      objectFit: 'cover',
      marginRight: '1rem',
      borderRadius: '4px',
    },
    cartItemDetails: {
      flex: 1,
    },
    cartItemTitle: {
      fontSize: '1.1rem',
      fontWeight: 'bold',
      marginBottom: '0.5rem',
    },
    cartItemPrice: {
      fontSize: '1rem',
      color: '#A31621',
      fontWeight: 'bold',
    },
    cartItemQuantity: {
      display: 'flex',
      alignItems: 'center',
      marginTop: '0.5rem',
    },
    quantityButton: {
      backgroundColor: '#eee',
      border: 'none',
      width: '25px',
      height: '25px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
      fontSize: '1rem',
      fontWeight: 'bold',
    },
    quantityDisplay: {
      margin: '0 0.5rem',
      fontSize: '1rem',
    },
    removeButton: {
      backgroundColor: '#A31621',
      color: 'white',
      border: 'none',
      padding: '0.25rem 0.5rem',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '0.8rem',
      marginLeft: '0.5rem',
    },
    cartTotal: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginTop: '2rem',
      textAlign: 'right',
      color: '#A31621',
    },
    checkoutButton: {
      backgroundColor: '#40E0D0', // Turquoise color
      color: 'white',
      border: 'none',
      padding: '1rem 2rem',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '1.1rem',
      fontWeight: 'bold',
      marginTop: '1rem',
      width: '100%',
    },
    backButton: {
      backgroundColor: 'transparent',
      color: '#A31621',
      border: 'none',
      cursor: 'pointer',
      fontSize: '1rem',
      marginTop: '1rem',
      display: 'flex',
      alignItems: 'center',
    },
    wishlistItem: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '1rem',
      padding: '0.5rem',
      backgroundColor: '#f8f8f8',
      borderRadius: '4px',
    },
    wishlistItemImage: {
      width: '50px',
      height: '50px',
      objectFit: 'cover',
      marginRight: '0.5rem',
      borderRadius: '4px',
    },
    wishlistItemDetails: {
      flex: 1,
    },
    wishlistItemTitle: {
      fontSize: '0.9rem',
      fontWeight: 'bold',
    },
    wishlistItemPrice: {
      fontSize: '0.8rem',
      color: '#A31621',
    },
    wishlistItemButtons: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
    },
    wishlistButton: {
      padding: '0.25rem 0.5rem',
      fontSize: '0.8rem',
      borderRadius: '4px',
      cursor: 'pointer',
      border: 'none',
    },
    moveToCartButton: {
      backgroundColor: '#A31621',
      color: 'white',
    },
    removeFromWishlistButton: {
      backgroundColor: 'white',
      color: '#A31621',
      border: '1px solid #A31621',
    },
    loadingOverlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999,
    },
    loadingSpinner: {
      width: '50px',
      height: '50px',
      border: '5px solid #f3f3f3',
      borderTop: '5px solid #3498db',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite',
    },
  };

  const CartPage = () => (
    <div style={styles.cartPage}>
      <div style={styles.cartContainer}>
        <h1 style={styles.cartTitle}>Your Cart</h1>
        
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {cart.map(item => (
              <div key={item.id} style={styles.cartItem}>
                <img src={item.image || "/placeholder.svg"} alt={item.name} style={styles.cartItemImage} />
                <div style={styles.cartItemDetails}>
                  <h3 style={styles.cartItemTitle}>{item.name}</h3>
                  <p style={styles.cartItemPrice}>{formatPrice(item.price)}</p>
                  <div style={styles.cartItemQuantity}>
                    <button style={styles.quantityButton} onClick={() => decrementQuantity(item.id)}>-</button>
                    <span style={styles.quantityDisplay}>{item.quantity}</span>
                    <button style={styles.quantityButton} onClick={() => incrementQuantity(item.id)}>+</button>
                    <button style={styles.removeButton} onClick={() => removeFromCart(item.id)}>Remove</button>
                  </div>
                </div>
                <div style={{ fontWeight: 'bold', marginLeft: 'auto' }}>
                  {formatPrice(item.price * item.quantity)}
                </div>
              </div>
            ))}
            
            <div style={styles.cartTotal}>
              Total: {formatPrice(calculateTotal())}
            </div>
            <button style={styles.checkoutButton} onClick={handleCheckout}>
              Proceed to Checkout
            </button>
          </>
        )}
        
        <button 
          onClick={() => setShowCart(false)} 
          style={styles.backButton}
        >
          ← Back to Shop
        </button>
      </div>
    </div>
  );

  const WishlistSidebar = () => (
    <div style={styles.sidebar}>
      <h2 style={{ ...styles.cartTitle, fontSize: '1.5rem' }}>Your Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        wishlist.map(item => (
          <div key={item.id} style={styles.wishlistItem}>
            <img src={item.image || "/placeholder.svg"} alt={item.name} style={styles.wishlistItemImage} />
            <div style={styles.wishlistItemDetails}>
              <h3 style={styles.wishlistItemTitle}>{item.name}</h3>
              <p style={styles.wishlistItemPrice}>{formatPrice(item.price)}</p>
            </div>
            <div style={styles.wishlistItemButtons}>
              <button
                style={{ ...styles.wishlistButton, ...styles.moveToCartButton }}
                onClick={() => moveToCart(item)}
              >
                Move to Cart
              </button>
              <button
                style={{ ...styles.wishlistButton, ...styles.removeFromWishlistButton }}
                onClick={() => removeFromWishlist(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );

  return (
    <div style={{ backgroundColor: '#f8f8f8', minHeight: '100vh', padding: '1rem' }}>
      {isLoading && (
        <div style={styles.loadingOverlay}>
          <div style={styles.loadingSpinner}></div>
        </div>
      )}
      {showCheckout ? (
        <CheckoutPage cart={cart} total={calculateTotal()} />
      ) : (
        <div style={styles.container}>
          {/* Header */}
          <div style={styles.iconWrapper}>
            <div style={styles.iconBadge} onClick={() => setShowCart(true)}>
              <div style={styles.icon}>🛒</div>
              {cart.length > 0 && (
                <span style={styles.badge}>{cart.reduce((total, item) => total + item.quantity, 0)}</span>
              )}
            </div>
            <div style={styles.iconBadge} onClick={() => setShowWishlist(!showWishlist)}>
              <div style={styles.icon}>❤️</div>
              {wishlist.length > 0 && (
                <span style={styles.badge}>{wishlist.length}</span>
              )}
            </div>
          </div>

          {showCart ? (
            <CartPage />
          ) : (
            <>
              <div style={styles.mainContent}>
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
              </div>
              {showWishlist && <WishlistSidebar />}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default ShopPage;

