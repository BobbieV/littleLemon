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

const BookingContext = createContext<BookingContextType | undefined>(undefined);

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
        resName: '',
        date: '',
        time: '',
        numGuests: '',
        occasion: '',
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
