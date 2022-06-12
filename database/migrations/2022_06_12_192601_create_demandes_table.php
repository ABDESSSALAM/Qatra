<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDemandesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('demandes', function (Blueprint $table) {
            $table->bigIncrements('CodeD');
            $table->string('SanguinP');
            $table->string('Hospitale');
            $table->unsignedBigInteger('IdCitoyen');
            $table->foreign('IdCitoyen')->references('IdCitoyen')
            ->on('citoyens')->onDelete('cascade')->onUpdate('cascade');
           
            $table->timestamp('DateUrg')->useCurrent();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('demandes');
    }
}
