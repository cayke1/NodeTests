import { describe, expect, it } from "vitest";
import { Appointment } from "../entities/appointment";
import { CreateAppointment } from "./create-appointment";

describe('Create Appointment', () => {
    const startsAt = new Date();
    const endsAt = new Date();

    endsAt.setDate(endsAt.getDate() + 1)

    it('should be able to create an appointment', () => {
        const createAppointment = new CreateAppointment();

        expect(createAppointment.execute({
            customer: 'John Doe',
            startsAt,
            endsAt
        })).resolves.toBeInstanceOf(Appointment);
    })
})