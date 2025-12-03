from pydantic import BaseModel

class HotelMehranOutput(BaseModel):
    is_hotel_mehran_query: bool
    is_hotel_mehran_accunt_or_tax_query: bool
    reason: str