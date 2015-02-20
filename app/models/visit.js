
/*!
 * Module dependencies
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**
 * Visit schema
 */

var VisitSchema = new Schema({
	patient: { type: Schema.Types.ObjectId, ref: 'Patient' },
  date: { type: Date, default: Date.now },
	price: { type: Number, default: null },
	decision: { type: Boolean, default: null },
	remarks: { type: String, default: '' },
	status: { type: String, enum: ['draft', 'complete'] },
});

/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */

/**
 * Methods
 */

VisitSchema.method({

});

/**
 * Statics
 */

VisitSchema.static({

});

/**
 * Register model
 */

mongoose.model('Visit', VisitSchema);
