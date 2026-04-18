export type Appointment = {
  id: string;
  catId: string;
  title: string;
  date: string;
  note?: string;
};

export type Vaccine = {
  id: string;
  catId: string;
  name: string;
  administeredAt: string;
  nextDueAt?: string;
};

export type WeightEntry = {
  id: string;
  catId: string;
  measuredAt: string;
  weightKg: number;
};
