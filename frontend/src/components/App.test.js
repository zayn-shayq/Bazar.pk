
import {render, screen } from '@testing-library/react'
import LoadingBox from './LoadingBox'
import CheckoutSteps from './CheckoutSteps'
import Rating from './Rating'
import MessageBox from './MessageBox'
import HomeScreen from '../screens/HomeScreen'



//for loading component 

test('Loading box testing', () => {
   render(<LoadingBox/>)
   const LoadingElement =screen.getAllByTestId('Loading');
   expect(LoadingElement).toBeTruthy();
})

test('Loading logo', () => {
    render(<LoadingBox/>)
    const LoadingElement =screen.getAllByTestId('Loading_Logo');
    expect(LoadingElement).toBeTruthy();
 })


//for checking steps component 

test('checkout steps testing', () => {


    const props= {step1: true , step2: true , step3: true , step4: true }
    render(<CheckoutSteps props={props} />)
    const LoadingElement =screen.getAllByTestId('checkingSteps');
    expect(LoadingElement).toBeTruthy();
    })

    test('checkout_Sign in', () => {


        const props= {step1: true , step2: true , step3: true , step4: true }
        render(<CheckoutSteps props={props} />)
        const LoadingElement =screen.getAllByTestId('Sign In');
        expect(LoadingElement).toBeTruthy();
        })    
        test('checkout_Shipping', () => {


            const props= {step1: true , step2: true , step3: true , step4: true }
            render(<CheckoutSteps props={props} />)
            const LoadingElement =screen.getAllByTestId('Shipping');
            expect(LoadingElement).toBeTruthy();
            })   

            test('checkout_Payment', () => {


                const props= {step1: true , step2: true , step3: true , step4: true }
                render(<CheckoutSteps props={props} />)
                const LoadingElement =screen.getAllByTestId('Payment');
                expect(LoadingElement).toBeTruthy();
                })   

                test('checkout_Place order', () => {


                    const props= {step1: true , step2: true , step3: true , step4: true }
                    render(<CheckoutSteps props={props} />)
                    const LoadingElement =screen.getAllByTestId('Place order');
                    expect(LoadingElement).toBeTruthy();
                    })   

//for message component

    test('Message', () => {
        render(<MessageBox />)
        const LoadingElement =screen.getAllByTestId('Message');
        expect(LoadingElement).toBeTruthy();
        })  


        test('Message for danger', () => {
            render(<MessageBox variant="danger"/>)
            const LoadingElement =screen.getAllByTestId('Message');
            expect(LoadingElement).toBeTruthy();
            })    
            
            test('Message for primary', () => {
                render(<MessageBox variant="primary"/>)
                const LoadingElement =screen.getAllByTestId('Message');
                expect(LoadingElement).toBeTruthy();
                }) 

                test('Message for secondary', () => {
                    render(<MessageBox variant="secondary"/>)
                    const LoadingElement =screen.getAllByTestId('Message');
                    expect(LoadingElement).toBeTruthy();
                    }) 


                    test('Message for success ', () => {
                        render(<MessageBox variant="ssuccess"/>)
                        const LoadingElement =screen.getAllByTestId('Message');
                        expect(LoadingElement).toBeTruthy();
                        }) 

                        test('Message for warning ', () => {
                            render(<MessageBox variant="warning"/>)
                            const LoadingElement =screen.getAllByTestId('Message');
                            expect(LoadingElement).toBeTruthy();
                            }) 

                            test('Message for nfo ', () => {
                                render(<MessageBox variant="info"/>)
                                const LoadingElement =screen.getAllByTestId('Message');
                                expect(LoadingElement).toBeTruthy();
                                }) 




 // for rating component        
        test('Rating', () => {


            render(<Rating/>)
            const LoadingElement =screen.getAllByTestId('Rating');
            expect(LoadingElement).toBeTruthy();
            })      



                test('Rating for 1', () => {


                    render(<Rating/>)
                    const LoadingElement =screen.getAllByTestId('Rating for 1');
                    expect(LoadingElement).toBeTruthy();
                    })  
                    test('Rating for 2', () => {


                        render(<Rating/>)
                        const LoadingElement =screen.getAllByTestId('Rating for 2');
                        expect(LoadingElement).toBeTruthy();
                        })  
                        test('Rating for 3', () => {


                            render(<Rating/>)
                            const LoadingElement =screen.getAllByTestId('Rating for 3');
                            expect(LoadingElement).toBeTruthy();
                            })  
                            test('Rating for 4', () => {


                                render(<Rating/>)
                                const LoadingElement =screen.getAllByTestId('Rating for 4');
                                expect(LoadingElement).toBeTruthy();
                                })  
                                test('Rating for 5', () => {


                                    render(<Rating/>)
                                    const LoadingElement =screen.getAllByTestId('Rating for 5');
                                    expect(LoadingElement).toBeTruthy();
                                    })  



        