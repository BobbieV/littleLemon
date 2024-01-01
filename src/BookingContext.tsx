import {createContext, useContext, useState, Dispatch, SetStateAction } from 'react';

interface BookingData {
    resName: string;
    date: string;
    time: string;
    numGuests: string;
    occasion: string;
}

interface BookingContextType {
    bookingData: BookingData;
    setBookingData: Dispatch<SetStateAction<BookingData>>;
}

export const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const useBooking = (): BookingContextType => {
    const context = useContext(BookingContext);
    if (!context) {
        throw new Error('useBooking must be used within a BookingProvider');
    }
    return context;
};

interface BookingProviderProps {
    children: React.ReactNode;
}

export const BookingProvider: React.FC<BookingProviderProps> = ({ children }: BookingProviderProps) => {
    const [bookingData, setBookingData]= useState<BookingData>({
        resName: 'Name',
        date: Date(),
        time: '5:00 pm',
        numGuests: '1',
        occasion: 'None',
    });

    const contextValue: BookingContextType = {
        bookingData,
        setBookingData
    };
    return (
        <BookingContext.Provider value={ contextValue }>
            {children}
        </BookingContext.Provider>
    );
};
