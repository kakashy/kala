import { sveltekit } from '@sveltejs/kit/vite';                                                       
                                                                                                      
const config = {                                                                          
        plugins: [sveltekit({
            ServiceWorker: 'src/service-worker.js'
        })]                                                                        
};                                                                                                    
                                                                                                      
export default config;  